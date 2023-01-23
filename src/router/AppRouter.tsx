import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DefaultLayout } from "../layouts";
import { DataDisplayPage, DataEntryPage, HomePage } from "../pages";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/entry",
                element: <DataEntryPage />
            },
            {
                path: "/display",
                element: <DataDisplayPage />
            },
            {
                path: "*",
                element: <HomePage />
            }
        ],
    },
])

export const AppRouter = () => <RouterProvider router={router} />