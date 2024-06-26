import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.jsx";
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import Experience from './components/ProfExperience.jsx';
import Contact from './components/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "experience", element: <Experience/>},
            {path: "contact", element: <Contact/>},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);