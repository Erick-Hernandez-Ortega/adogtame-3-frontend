import { LoginErrorResponse, LoginSuccessResponse, UserLogin } from '@/types/login';
import { User } from '@/types/user';
import { createPetPublication, getAllPets, getPetById } from '@/utils/petAPI';
import { getUserByEmail, userLogin, userLogout } from '@/utils/userAPI';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
                    //console.log(loginResponse);
                    if ((loginResponse as LoginSuccessResponse).status === 'success') {
                        set({ token: (loginResponse as LoginSuccessResponse).token })

                        // ? Si es correcto el login se guarda user
                        const userLogin: any = await getUserByEmail(user.email);
                        set({ user: userLogin });

                        return true
                    } else {
                        //console.log((loginResponse as LoginErrorResponse).error);
                        set({ loginError: (loginResponse as LoginErrorResponse).error })
                        return false
                    }
                },
                userLogOut: async (token) => {
                    const userLogOut = await userLogout(token)
                    //console.log(userLogOut);
                    if (userLogOut.status === 200) {
                        set({ token: '' })
                        return true
                    } else {
                        return false
                    }
                },
                petPublication: (pet: FormData, token: string) => {
                    // console.log(pet);
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
            }),
            {
                name: 'userInfo',
                partialize: (state) => ({ token: state.token, user: state.user }),
            }
        )
    )
);
