import * as axios from "axios";

const baseApi = axios.create({
    baseURL: import.meta.env.REACT_APP_BASE_URL,
    timeout: 10000,
    withCredentials: true,

    paramsSerializer: {
        indexes: false
    }
})

export default baseApi;