export default function Heart({ variant = "solid", className = "", ...props }) {
    const base =
        "w-10 h-10 inline-flex items-center justify-center transition-all duration-200 rounded-[43px]";

    const variants = {
        solid: "bg-[var(--primary)] hover:bg-[var(--primary-hover)]",
        ghost: "bg-white border-0 hover:bg-[var(--primary-bg-hover)]",
    };

    const getShapeColor = () => {
        if (variant === "solid") {
            return "#ffffff";
        } else if (variant === "ghost") {
            return "#1a1a1a";
        } else {
            return "#f2f2f2";
        }
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="32.000000"
                height="32.000000"
                fill="none"
            >
                <rect
                    id="Heart"
                    width="32.000000"
                    height="32.000000"
                    x="0.000000"
                    y="0.000000"
                    fill="rgb(255,255,255)"
                    fillOpacity="0"
                />
                <path
                    id="Vector"
                    d="M15.9995 7.45074C24 -2.66667 42.6666 13.3333 15.9995 28.0722C-10.6667 13.3333 7.99999 -2.66667 15.9995 7.45074Z"
                    fillRule="nonzero"
                    stroke={getShapeColor()}
                    strokeWidth="1.500000"
                />
            </svg>
        </button>
    );
}
