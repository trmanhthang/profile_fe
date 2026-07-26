import type {ReactNode} from "react";
import Header from "@/layouts/DefaultLayout/Header/Header.tsx";
import Sidebar from "@/layouts/DefaultLayout/Sidebar/Sidebar.tsx";


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