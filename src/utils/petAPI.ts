import { petAPIURL } from '@/constants/api-urls';
import axios, { AxiosResponse, AxiosError } from 'axios';

export const createPetPublication = async (pet: FormData, token: string): Promise<AxiosResponse | AxiosError> => {
    return await axios.post(petAPIURL, pet, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${token}`
        }
    })
        .then((response: AxiosResponse) => {
            return response;
        })
        .catch((error: AxiosError) => {
            console.log(error);
            return error;
        })
}