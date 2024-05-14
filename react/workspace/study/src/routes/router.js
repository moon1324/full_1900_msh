import { createBrowserRouter } from "react-router-dom";
// import Main from "../pages/main/Main";
import MainPage from "../pages/main/MainPage";
import Mind from "../pages/mind/Mind";
import Layout from "../pages/layout/Layout";
// import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     // element: <Main />,
    //     // element: <MainPage />,
    // },
    // {
    //     path: "/mind",
    //     element: <Mind />,
    // },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/mind",
                element: <Mind />,
            },
        ],
    },
    {
        // 위 모든 경로에서 페이지를 못찾으면 여기로 온다
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
