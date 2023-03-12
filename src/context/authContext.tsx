import { useState, useEffect, createContext } from 'react';
import { Token, User } from '@/api'
import { IUser } from '@/interfaces/user';

interface AuthProviderProps {
    children: React.ReactNode;
}

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext({
    accessToken: '',
    user: null,
    logIn: async (token: string) => {},
    logOut: () => {},
    updateUser: (key: any, value: any) => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if(!token) {
                logOut();
                setLoading(false);
                return
            }

            if(tokenCtrl.hasExpired(token)) {
                logOut();
            } else {
                await logIn(token);
            }
        })()
    }, [])

    const logIn = async (token: string) => {
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response)
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const logOut = () => {
        tokenCtrl.removeToken();
        setToken('');
        setUser(null);
    }

    const updateUser = (key: any, value: any) => {
        setUser({
            ...user as any,
            [key]: value
        })
    }

    const data = {
        accessToken: token,
        user,
        logIn,
        logOut,
        updateUser
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    )
}