export default function Cart({ variant = "solid", className = "", ...props }) {
    const base =
        "w-10 h-10 inline-flex items-center justify-center transition-all duration-200 rounded-[43px]";

    const variants = {
        solid: "bg-[var(--primary)] hover:bg-[var(--primary-hover)]",
        ghost: "bg-white border-0 hover:bg-[var(--primary-bg-hover)]",
    };

    const getBagColor = () => {
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
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="20.000000"
                height="20.000000"
                fill="none"
            >
                <rect
                    id="Bag"
                    width="20.000000"
                    height="20.000000"
                    x="0.000000"
                    y="0.000000"
                />
                <path
                    id="Rectangle"
                    d="M17.5 17.5L2.5 17.5L4.16667 8.33333L6.66667 8.33333L13.3333 8.33333L15.8333 8.33333L17.5 17.5ZM6.66667 8.33333L6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333L13.3333 8.33333M6.66667 8.33333L6.66667 10.8333M13.3333 8.33333L13.3333 10.8333"
                    fillRule="nonzero"
                    stroke={getBagColor()}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.300000"
                />
            </svg>
        </button>
    );
}
