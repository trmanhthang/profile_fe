import * as axios from "axios";

const publicApi = axios.create({
    baseURL: "/api/v1",
    timeout: 10000,
    withCredentials: true,
    paramsSerializer: {
        indexes: false,
    }
});

publicApi.interceptors.response.use(
    (res) => res,
    async (error) => Promise.reject(error)
)

export default publicApi;