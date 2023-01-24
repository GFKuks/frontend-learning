type ButtonProps = {
    className?: string;
    label: string;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
}

export const Button = ({ className, label, onClick, type }: ButtonProps) => {
    return (
        <button
            className={"px-3 py-1 bg-accent rounded text-text-icons " + className}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}