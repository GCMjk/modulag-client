import { Token } from "@/api";

export const authFetch = async (url: any, params?: any) => {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logOut = () => {
        tokenCtrl.removeToken();
        window.location.replace('/')
    }

    if(!token) {
        logOut();
    } else {
        if(tokenCtrl.hasExpired(token)) {
            logOut();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                return await fetch(url, paramsTemp);
            } catch (error) {
                return error;
            }
        }
    }
} 