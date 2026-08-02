import type {ReactNode} from "react";

function Sidebar({children}: {children: ReactNode}) {
    return (
        <div className={"container"}>
            {children}
        </div>
    )
}

export default Sidebar;