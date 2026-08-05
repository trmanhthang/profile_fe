import type {ReactNode} from "react";
import {AdminMenu, Sidebar} from "@/components/customs";

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