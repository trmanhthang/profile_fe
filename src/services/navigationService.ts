import type {NavigateFunction} from "react-router";
import config from "@/config";

let navigate: NavigateFunction | null = null;

export const NavigationService = {
    setNavigate(nav: NavigateFunction): void {
        navigate = nav;
    },

    forbidden() {
        navigate?.(config.routes.forbidden);
    }
}