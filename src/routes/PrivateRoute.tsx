import {useAuthStore} from "@/stores";
import type {ReactNode} from "react";
import type {RoleType} from "@/enums";
import {Navigate} from "react-router";
import config from "@/config";

function PrivateRoute({children, roles}: { children: ReactNode, roles?: RoleType[] }) {
    const user = useAuthStore((state) => state.user);

    if (!user) {
        return <Navigate to={config.routes.login} />;
    }

    // Không đủ quyền
    if (
        roles &&
        roles.length > 0 &&
        !roles.includes(user.role)
    ) {
        return <Navigate to={config.routes.forbidden} />;
    }

    return <>{children}</>;
}

export default PrivateRoute;