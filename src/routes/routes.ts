import config from "@/config"
import Home from "@/pages/Home/Home.tsx";
import Login from "@/pages/Login/Login.tsx";
import type { AppRoute } from "@/routes/types.ts";

const publicRoutes: AppRoute[] = [
    {
        path: config.routes.home,
        component: Home,
        layout: null,
    },
    {
        path: config.routes.login,
        component: Login
    }
]

const privateRoutes: AppRoute[] = []

export { publicRoutes, privateRoutes }