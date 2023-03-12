import { ENV } from '@/utils';
import { ILogIn, IUser } from '@/interfaces';

export class Auth {
    async register(data: IUser) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch(error) {
            throw error;
        }
    }

    async logIn(data: ILogIn) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, params);
            const result = await response.json();

            if(response.status !== 200) throw result;

            return result;
        } catch(error){
            throw error;
        }
    }
}