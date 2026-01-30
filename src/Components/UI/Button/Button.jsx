export default function Button({
    children,
    variant = "solid",
    size = "md",
    className = "",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[43px]";

    const variants = {
        solid: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
        outline:
            "border border-[var(--primary)] text-[var(--primary)] hover:border-[var(--primary-hover)] hover:text-[var(--primary-hover)]",
        ghost: "text-[var(--primary)] bg-[var(--primary-bg)] border-0 hover:text-[var(--primary-hover)] hover:bg-[var(--primary-bg-hover)]",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
