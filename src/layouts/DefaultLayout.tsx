import { Outlet } from "react-router-dom";
import { Navigation } from "./components";

export const DefaultLayout = () => (
    <>
        {/* <header>Very important header information</header> */}
        <div className="flex bg-gray-50 h-screen">
            <div className="mx-auto max-w-3xl grow bg-white">
                <Navigation />
                <Outlet />
            </div>
        </div>
        {/* <footer>Very important footer information</footer> */}
    </>
)