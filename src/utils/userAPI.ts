import axios, { AxiosResponse, AxiosError } from 'axios';
import { createNewUserAPIURL, loginAPIURL, logoutAPIURL } from "@/constants/api-urls";
import { User, UserLogin } from "@/types/apiTypes";

export const userLogin = async (user: UserLogin): Promise<AxiosResponse> => {
    return await axios.post(loginAPIURL, user)
        .then((response: AxiosResponse) => {
            // console.log(response);
            return response;
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error);
        });
};

export const createNewUser = async (newUser: User): Promise<AxiosResponse | AxiosError> => {
    return await axios.post(createNewUserAPIURL, newUser)
        .then((response: AxiosResponse) => {
            // console.log(response);
            return response;
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error);
        });
};

export const userLogout = async (token: String | null): Promise<AxiosResponse | AxiosError> => {
    return await axios.post(logoutAPIURL, null, {
        headers: {
            'Authorization': token ? `${token}` : '',
        }
    })
        .then((respone: AxiosResponse) => {
            return respone;
        })
        .catch((error: AxiosError) => {
            return error;
        });
};