import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Link className="text-lg my-auto ml-4 font-bold text-text-icons" to="/">Frontend Learning - GFK</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/entry">Data entry</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/display">Data display</Link>
        </>
    )
}

export const Header = () => (
    <header className="flex min-h-[100px] bg-primary">
        <div className="flex my-auto py-3 space-x-3">
            <Navigation />
        </div>
    </header>
)