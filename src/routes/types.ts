import type {ComponentType, ElementType} from "react";
import type {RoleType} from "@/enums";

export interface AppRoute {
    path: string;
    component: ComponentType;
    layout?: ElementType | null;
    auth?: boolean;
    roles?: RoleType[];
}