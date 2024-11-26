import axios, { AxiosResponse, AxiosError } from 'axios';
import { createNewUserAPIURL, loginAPIURL, logoutAPIURL, updateUserAPIURL, userAPIURL } from "@/constants/api-urls";
import { LoginErrorResponse, LoginSuccessResponse, UserLogin } from '@/types/login';
import { NewUser } from '@/types/registro';
import { UserForm } from '@/types/user';

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

export const getUserById = async (id: string): Promise<AxiosResponse | AxiosError> => {
    return await axios.get(`${userAPIURL}id/${id}`)
        .then((response: AxiosResponse) => {
            return response.data.user;
        })
        .catch((error: AxiosError) => {
            return error;
        })
}

export const updateUser = async (user: UserForm, token: String | null): Promise<AxiosResponse | AxiosError> => { 
    return await axios.put(updateUserAPIURL, user, {
        headers: {
            'Authorization': token ? `${token}` : '',
        }
    })
    .then((response: AxiosResponse) => {
        return response.data
    })
    .catch((error: AxiosError) => {
        return Promise.reject(error);
    });
}