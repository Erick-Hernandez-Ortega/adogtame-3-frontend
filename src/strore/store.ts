import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreState = {
    isLoading: boolean;
    token: string;
    changeLoader: (value: boolean) => void;
    addToken: (token: string) => void;
};

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            isLoading: false,
            token: '',
            changeLoader: (value) => {
                set({ isLoading: value });
            },
            addToken: (token) => {
                set({ token });
            },
        }),
        {
            name: 'userInfo', // nombre para el almacenamiento persistente
        }
    )
);
