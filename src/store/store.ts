import { create } from 'zustand';
import { createPetPublication, getAllPets, getPetById, getPetsByUser } from '@/utils/petAPI';
import { devtools, persist } from 'zustand/middleware';
import { getUserByEmail, getUserById, userLogin, userLogout } from '@/utils/userAPI';
import { LoginErrorResponse, LoginSuccessResponse, UserLogin } from '@/types/login';
import { User } from '@/types/user';
import Cookies from 'js-cookie';

type StoreState = {
    isLoading: boolean;
    token: string;
    loginError: string;
    changeLoader: (value: boolean) => void;
    userLogin: (user: UserLogin) => Promise<boolean>;
    userLogOut: (token: string) => Promise<boolean>;
    petPublication: (pet: FormData, token: string) => void;
    getAllPublications: () => any;
    getPetById: (id: string) => any;
    user: User | null;
    getUserById: (id: string) => any;
    getPetsByUser: (id: string) => any;
};

export const useStore = create<StoreState>()(
    devtools(
        persist(
            (set) => ({
                isLoading: true,
                token: '',
                loginError: '',
                user: null,
                changeLoader: (value) => {
                    set({ isLoading: value });
                },
                userLogin: async (user) => {
                    const loginResponse = await userLogin(user)
                    if ((loginResponse as LoginSuccessResponse).status === 'success') {
                        set({ token: (loginResponse as LoginSuccessResponse).token })

                        const userLogin: any = await getUserByEmail(user.email);
                        Cookies.set('userInfo', JSON.stringify(userLogin));

                        return true
                    } else {
                        set({ loginError: (loginResponse as LoginErrorResponse).error })
                        return false
                    }
                },
                userLogOut: async (token) => {
                    const userLogOut = await userLogout(token)
                    if (userLogOut.status === 200) {
                        set({ token: '' })
                        return true
                    } else {
                        return false
                    }
                },
                petPublication: (pet: FormData, token: string) => {
                    const petPublication = createPetPublication(pet, token);
                },
                getAllPublications: async (): Promise<any> => {
                    const { pets } = await getAllPets();

                    return pets;
                },
                getPetById: async (id: string) => {
                    const { pet } = await getPetById(id);
                    return pet
                },
                getUserById: async (id: string) => {
                    const user  = await getUserById(id);
                    return user
                },
                getPetsByUser: async (id: string) => {
                    const response = await getPetsByUser(id);
                    return response.pets
                }
            }),
            {
                name: 'userInfo',
                partialize: (state) => ({ token: state.token, user: state.user }),
            }
        )
    )
);
