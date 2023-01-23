import { Link } from "react-router-dom";

const Title = () => (
    <h3 className="my-auto ml-4 font-bold text-text-icons">Frontend Learning - GFK</h3>
)

const Navigation = () => {
    return (
        <>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/entry">Data entry</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/display">Data display</Link>
            <Link className="px-3 py-1 bg-accent rounded text-text-icons" to="/">Fallback</Link>
        </>
    )
}

export const Header = () => (
    <header className="flex min-h-[100px] bg-primary">
        <div className="flex my-auto py-3 space-x-3">
            <Title />
            <Navigation />
        </div>
    </header>
)