import type {ReactNode} from "react";

function Header({children}: {children: ReactNode}) {
    return (
        <div className={"container"}>
            {children}
        </div>
    );
}

export default Header;