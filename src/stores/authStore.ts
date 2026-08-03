import {create} from "zustand";
import type {RoleType} from "@/enums";
import {persist} from "zustand/middleware";

interface User {
    publicId: string;
    fullName: string;
    firstName: string;
    lastName: string;
    role: RoleType;
}

interface AuthState {
    accessToken: string | null;

    user: User | null;

    setUser: (user: User | null) => void;

    setAccessToken: (accessToken: string | null) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            user: null,
            setUser: (user) => set({user}),
            setAccessToken: (accessToken) => set({accessToken}),
            logout: () => set({
                user: null,
                accessToken: null,
            }),
        }),
        {
            name: "auth-store",
            partialize: (state) => ({
                user: state.user,
            })
        }
    )
);