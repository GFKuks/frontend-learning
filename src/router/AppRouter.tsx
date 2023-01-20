import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DefaultLayout } from "../layouts";
import { DataEntryPage, HomePage } from "../pages";

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/test",
                element: <DataEntryPage />
            },
            {
                path: "*",
                element: <HomePage />
            }
        ]
    },
])

export const AppRouter = () => <RouterProvider router={router} />