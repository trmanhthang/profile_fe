import type {ReactNode} from "react";
import {Header, Sidebar} from "@/layouts/components";


function DefaultLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <div className={"container"}>
                <Sidebar/>
                <div className={"content"}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;