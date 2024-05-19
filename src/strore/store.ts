import { create } from "zustand";

type StoreState = {
    isLoading: boolean,
    token: string,
    changeLoader: (value: boolean) => void;
    addToken: (token: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    isLoading: false,
    token: '',

    changeLoader: (value) => {
        set(() => ({
            isLoading: value
        }))
    },

    addToken: (token) => {
        set(() => ({
            token: token
        }))
    }
}))