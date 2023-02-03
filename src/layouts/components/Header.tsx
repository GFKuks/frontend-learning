import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Link className="text-base my-auto ml-4 font-bold text-text-icons" to="/">Frontend Learning - GFK</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/numbers">Numbers</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/numbers/sort">Numbers sort</Link>
            {/* <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/users">Users</Link> */}
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