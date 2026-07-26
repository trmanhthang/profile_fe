import type {ComponentType, ElementType} from "react";

export interface AppRoute {
    path: string;
    component: ComponentType;
    layout?: ElementType | null;
}