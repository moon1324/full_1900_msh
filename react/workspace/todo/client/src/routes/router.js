import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import Layout from "../pages/layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
