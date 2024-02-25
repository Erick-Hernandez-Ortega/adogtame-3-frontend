import axios, { AxiosResponse, AxiosError } from 'axios';
import { createNewUserAPIURL, loginAPIURL } from "@/constants/api-urls";
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

export const createNewUser = async (newUser: User) => {
    return await axios.post(createNewUserAPIURL, newUser)
        .then((response: AxiosResponse) => {
            // console.log(response);
            return response;
        })
        .catch((error: AxiosError) => {
            return Promise.reject(error);
        });
};