import axios, { AxiosResponse, AxiosError } from 'axios';
import { createNewUserAPIURL, loginAPIURL, logoutAPIURL, userAPIURL } from "@/constants/api-urls";
import { LoginErrorResponse, LoginSuccessResponse, UserLogin } from '@/types/login';
import { NewUser } from '@/types/registro';

export const userLogin = async (user: UserLogin): Promise<LoginSuccessResponse | LoginErrorResponse> => {
    return await axios.post(loginAPIURL, user)
        .then((response: AxiosResponse) => {
            return response.data as LoginSuccessResponse;
        })
        .catch((error: AxiosError) => {
            return error.response?.data as LoginErrorResponse;
        });
};

export const createNewUser = async (newUser: NewUser): Promise<AxiosResponse | AxiosError> => {
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

export const getUserByEmail = async (email: string): Promise<AxiosResponse | AxiosError> => {
    return await axios.get(`${userAPIURL}${email}`)
        .then((response: AxiosResponse) => {
            return response.data.user;
        })
        .catch((error: AxiosError) => {
            return error;
        })
}