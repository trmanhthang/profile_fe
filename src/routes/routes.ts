import config from "@/config"
import type {AppRoute} from "@/routes/types.ts";
import {Role} from "@/enums";
import {AdminLayout} from "@/layouts";
import {Dashboard, Forbidden, Home, Login, Project} from "@/pages";

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
    },
    {
        path: config.routes.project,
        component: Project,
        layout: AdminLayout,
        auth: true,
        roles: [Role.ADMIN]
    }
]