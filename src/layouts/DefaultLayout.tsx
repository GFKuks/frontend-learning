import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const DefaultLayout = () => (
    <>
        <Header />
        <div className="flex bg-gray-50 h-screen">
            <div className="mx-auto max-w-4xl grow bg-white">
                <Outlet />
            </div>
        </div>
        <Footer />
    </>
)