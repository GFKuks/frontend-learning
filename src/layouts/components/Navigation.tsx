import { Link } from "react-router-dom";

export const Navigation = () => (
    <div className="py-3 bg-green-800 space-x-0.5">
       <Link className="p-3 bg-green-300 rounded" to="/test">Data entry</Link>
       <Link className="p-3 bg-green-300 rounded" to="/">Fallback</Link>
    </div>
)