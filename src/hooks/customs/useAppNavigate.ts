import {useNavigate} from "react-router";
import config from "@/config";

export function useAppNavigate() {
    const navigate = useNavigate();

    return {
        home: () => navigate(config.routes.home),
        login: () => navigate(config.routes.login),
        dashboard: () => navigate(config.routes.dashboard),
        forbidden: () => navigate(config.routes.forbidden),
        project: () => navigate(config.routes.project),
    }
}