import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";


@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private axios: AxiosInstance = axios;
    
    
    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>( url, {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
                }
            });
            
            return data;
        } catch (error) {
            throw new Error('An error ocurred - check logs')
        }
    }

}