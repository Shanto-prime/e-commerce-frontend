export default function Cross({ variant = "gray", className = "", ...props }) {
    const variants = {
        dark: "#1A1A1A",
        gray: "#666666",
    };

    return (
        <button className={` ${className}`} {...props}>
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24.000000"
                height="24.000000"
                fill="none"
            >
                <rect
                    id="Property 1=Default"
                    width="24.000000"
                    height="24.000000"
                    x="0.000000"
                    y="0.000000"
                    fill="rgb(255,255,255)"
                    fillOpacity="0"
                />
                <path
                    id="Vector"
                    d="M23 12C23 5.92525 18.0747 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0747 5.92525 23 12 23C18.0747 23 23 18.0747 23 12Z"
                    fillRule="nonzero"
                    stroke={`${variants[variant]}`}
                    strokeWidth="1.000000"
                />
                <path
                    id="Vector"
                    d="M16 8L8 16"
                    fillRule="nonzero"
                    stroke={`${variants[variant]}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.500000"
                />
                <path
                    id="Vector"
                    d="M16 16L8 8"
                    fillRule="nonzero"
                    stroke={`${variants[variant]}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.500000"
                />
            </svg>
        </button>
    );
}
