import {useNavigate} from "react-router";
import {AuthServices} from "@/services";

interface LoginRequest {
    username: string;
    password: string;
}

export function useLogin() {
    const navigate = useNavigate();

    const loginHandler = async (body: LoginRequest) => {
        const res = await AuthServices.login(body.username, body.password);

        // console.log(res.result.role);
    }

    return {
        loginHandler,
    }
}