import type {ReactNode} from "react";
import {Header} from "@/layouts/components";


function DefaultLayout({children}: { children: ReactNode }) {
    return (
        <>
            <Header children={<></>}/>
            <div className={"container"}>
                <div className={"content"}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;