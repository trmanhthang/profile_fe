import type {ReactNode} from "react";
import {Header} from "@/components/customs";


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