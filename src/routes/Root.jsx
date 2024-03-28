import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.jsx";
import NavigationProvider from "../context/NavigationProvider.jsx";

const Root = () => {
    return (
        <>
            <NavigationProvider>
                <Nav/>
                <div id="detail">
                    <Outlet/>
                </div>
            </NavigationProvider>
        </>
    );
};

export default Root;
