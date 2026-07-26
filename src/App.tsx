import {BrowserRouter, Route, Routes} from "react-router";
import {publicRoutes} from "@/routes/routes.ts";
import {DefaultLayout} from "@/layouts";
import {Fragment} from "react";

function App() {

    return (
        <BrowserRouter>
            <div className={"App"}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        const Layout =
                            route.layout === null
                                ? Fragment
                                : route.layout || DefaultLayout;

                        return <Route key={index} path={route.path} element={<Layout>
                            <Page/>
                        </Layout>}/>
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
