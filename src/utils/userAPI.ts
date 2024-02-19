import axios, { AxiosResponse, AxiosError } from 'axios';
import { loginAPIURL } from "@/constants/api-urls";
import { UserLogin } from "@/types/apiTypes";

export const userLogin = async (user: UserLogin): Promise<AxiosResponse> => {
    return await axios.post(loginAPIURL, user)
        .then((response: AxiosResponse) => {
            // console.log(response);
            return response;
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error);
        });
}