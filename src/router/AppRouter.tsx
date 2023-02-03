import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DefaultLayout } from "../layouts";
import { NumbersTablePage, UsersPage, HomePage, NumbersSortPage } from "../pages";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/users",
                element: <UsersPage />
            },
            {
                path: "/numbers",
                element: <NumbersTablePage />
            },
            {
                path: "/numbers/sort",
                element: <NumbersSortPage />
            },
            {
                path: "*",
                element: <HomePage />
            }
        ],
    },
])

export const AppRouter = () => <RouterProvider router={router} />