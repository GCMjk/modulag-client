import { ENV } from "@/utils"
const populate = '?populate=*'

export class Product {
    async getAll() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}${populate}`;

            const response = await fetch(url);
            const result = await response.json()

            if(response.status !== 200) throw result
            return result;
            
        } catch (error) {
            throw error
        }
    }

    async getOne(id: string) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}/${id}${populate}`;

            const response = await fetch(url);
            const result = await response.json()

            if(response.status !== 200) throw result
            return result;
            
        } catch (error) {
            throw error
        }
    }
}