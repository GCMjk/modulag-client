import { ENV } from "@/utils";
import jwtDecode from 'jwt-decode';

export class Token {
    setToken(token: string) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    }

    hasExpired(token: any) {
        const tokenDecode = jwtDecode(token) as {
            exp: number;
        };
        const expireDay = tokenDecode.exp * 1000;
        const currentDay = new Date().getTime();

        if(currentDay > expireDay) {
            return true;
        }

        return false;
    }
}