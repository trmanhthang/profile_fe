import {publicApi} from "@/config/axios";
import type {BaseResponse} from "@/models";
import type {AuthenticationResponse} from "@/models/response";

const prefix = "/authentication";

export const AuthServices = {
    async login(username: string, password: string) {
        const res = await publicApi.post<BaseResponse<AuthenticationResponse>>(prefix + '/login', {
            username: username,
            password: password
        });

        return res.data;
    }
}