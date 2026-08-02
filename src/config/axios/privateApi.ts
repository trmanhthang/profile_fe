import * as axios from "axios";
import {useAuthStore} from "@/stores";
import {NavigationService} from "@/services";

const privateApi = axios.create({
    baseURL: "/api/v1",
    timeout: 10000,
    withCredentials: true,

    paramsSerializer: {
        indexes: false
    }
});

privateApi.interceptors.request.use(
    (config) => {
        const user = useAuthStore.getState().user;

        const token = user?.accessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
)

privateApi.interceptors.response.use(
    (res) => res.data,
    async (error) => {
        if (error.response.status === 401) {

        }

        if (error.response.status === 403) {
            NavigationService.forbidden();
        }

        return Promise.reject(error);
    }
)

export default privateApi;