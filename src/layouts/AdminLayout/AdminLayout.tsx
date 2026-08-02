import type {ReactNode} from "react";
import {AdminMenu, AdminNavbar, Header, Sidebar} from "@/layouts/components";

function AdminLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Header
                children={<AdminMenu/>}
            />
            <div className={"container"}>
                <Sidebar children={<AdminNavbar/>}/>
                <div className={"content"}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AdminLayout;