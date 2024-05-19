import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type StoreState = {
    isLoading: boolean;
    token: string;
    changeLoader: (value: boolean) => void;
    addToken: (token: string) => void;
};

export const useStore = create<StoreState>()(devtools(
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
            name: 'userInfo',
            partialize: (state) => ({ token: state.token }),
        }
    )
)
);
