import config from "@/config"
import Home from "@/pages/Home/Home.tsx";
import Login from "@/pages/Login/Login.tsx";
import type {AppRoute} from "@/routes/types.ts";
import Dashboard from "@/pages/Dashboard";
import {Forbidden} from "@/pages/Forbidden";
import {Role} from "@/enums";
import {AdminLayout} from "@/layouts";

export const routes: AppRoute[] = [
    {
        path: config.routes.home,
        component: Home,
        layout: null,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.dashboard,
        component: Dashboard,
        layout: AdminLayout,
        auth: true,
        roles: [Role.ADMIN]
    },
    {
        path: config.routes.forbidden,
        component: Forbidden,
        layout: null,
    }
]