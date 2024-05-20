import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import TodoContainer from "../pages/todo/TodoContainer";
// import SignIn from '../pages/signIn/SignIn';
// import SignUp from '../pages/signUp/SignUp';
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
            {
                path: "/todo",
                element: <TodoContainer />,
            },
            // {
            //     path: "/signIn",
            //     element: <SignIn />,
            // },
            // {
            //     path: "/signUp",
            //     element: <SignUp />,
            // },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
