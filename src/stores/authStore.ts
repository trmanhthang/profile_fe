import {create} from "zustand";
import type {RoleType} from "@/enums";
import {persist} from "zustand/middleware";

interface User {
    accessToken: string;
    publicId: string;
    fullName: string;
    firstName: string;
    lastName: string;
    role: RoleType;
}

interface AuthState {
    user: User | null;

    setUser: (user: User | null) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({user}),
            logout: () => set({
                user: null,
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