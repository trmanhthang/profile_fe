import type {ReactNode} from "react";
import {AdminMenu, Sidebar} from "@/layouts/components";

function AdminLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Sidebar
                menu={<AdminMenu/>}
                children={children}
            />
        </>
    )
}

export default AdminLayout;