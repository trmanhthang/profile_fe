import {BrowserRouter, Route, Routes, useNavigate} from "react-router";
import {routes} from "@/routes";
import {DefaultLayout} from "@/layouts";
import {Fragment, useEffect} from "react";
import PrivateRoute from "@/routes/PrivateRoute.tsx";
import {NavigationService} from "@/services";

function NavigationInitializer() {
    const navigate = useNavigate();

    useEffect(() => {
        NavigationService.setNavigate(navigate);
    }, [navigate]);

    return null;
}

function App() {

    return (
        <BrowserRouter>
            <NavigationInitializer />

            <div className={"App"}>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;

                        const Layout =
                            route.layout === null
                                ? Fragment
                                : route.layout || DefaultLayout;

                        const element = (
                            <Layout>
                                <Page/>
                            </Layout>
                        );

                        return <Route key={index} path={route.path} element={
                            route.auth
                                ? (<PrivateRoute roles={route.roles}>
                                    {element}
                                </PrivateRoute>)
                                : (element)}/>
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
