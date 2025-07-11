import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Column: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex text-xl text-black/50 font-semibold bg-[#E5E5E5] p-4 w-90 h-40 rounded-2xl ${className}`} {...props}>{children}</div>
    )
}