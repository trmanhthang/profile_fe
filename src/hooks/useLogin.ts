import {AuthServices} from "@/services";
import {useAuthStore} from "@/stores";
import type {AuthenticationResponse} from "@/models/response";
import {Role} from "@/enums";
import {useAppNavigate} from "@/hooks/customs";
import {useState} from "react";

interface LoginRequest {
    username: string;
    password: string;
}

export function useLogin() {
    const user = useAuthStore();
    const [loading, setLoading] = useState(false);

    const {home, dashboard} = useAppNavigate();

    const loginHandler = async (body: LoginRequest) => {
        try {
            setLoading(true);
            const res = await AuthServices.login(body.username, body.password);

            const data: AuthenticationResponse = res.result;
            const params = {
                publicId: data.publicId,
                fullName: data.fullName,
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role,
            }

            user.setUser(params);
            user.setAccessToken(data.accessToken);

            if (params.role === Role.ADMIN) {
                dashboard();
            } else {
                home();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        loginHandler,
    }
}