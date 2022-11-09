import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRoutes,
    Navigate,
    Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Security from "./pages/About";
import AppConsole from "./pages/Products";
import Error from "./pages/Error";
import { useState } from "react";

function App() {
    const componentsList = {
        "app-console": AppConsole,
        "saas-console": SaasConsole,
        security: Security,
    };
    const [isAuthorized, setIsAuthorized] = useState(false);
    const data = [
        {
            feature_key: "app-console",
            id: "36632b80-2b76-49e0-b0f3-88f9249975e7",
        },
        {
            feature_key: "security",
            id: "3a00f35a-df2a-4dc6-bc23-29aaab24aab3",
        },
        {
            feature_key: "saas-console",
            id: "f9b754bb-eb00-4941-b58b-4d18316feef7",
        },
    ];

    return (
        <div className="main">
            <button onClick={() => setIsAuthorized(true)} className="btn">
                Login
            </button>
            {isAuthorized ? "OHH YES!!!" : "OHH NOOO!!!"}
            <button onClick={() => setIsAuthorized(false)} className="btn">
                Logout
            </button>
            <br />
            <Link to="/app-console" className="btn">
                ac
            </Link>
            <Link to="/saas-console" className="btn">
                sc
            </Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<PrivateRoutes isAuthorized={isAuthorized} />}>
                    {data.map((route) => {
                        return (
                            <Route
                                key={route.id}
                                path={route.feature_key}
                                element={CreateComponent(route, componentsList)}
                            />
                        );
                    })}
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

function PrivateRoutes({ isAuthorized }) {
    if (!isAuthorized) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}
function SaasConsole() {
    return <div>SaasConsole</div>;
}

function CreateComponent(block, componentsList) {
    if (typeof componentsList[block.feature_key] !== "undefined") {
        debugger;
        return React.createElement(componentsList[block.feature_key], {
            key: block.id,
            block: block,
        });
    }
    return React.createElement(
        () => (
            <div>
                The component {block.feature_key} has not been created yet.
            </div>
        ),
        { key: block.id }
    );
}

export default App;
