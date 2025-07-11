import type { HtmlHTMLAttributes } from "react";

export const CloseButton: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children, 
    className, 
    ...props 
}) => {
    return (
        <div className={`p-2 rounded-2xl bg-[#CCCCCC] w-[3.5em] h-[3.5em] flex items-center justify-center cursor-pointer hover:translate-0.5 transition ease-linear shadow-lg ${className}`} {...props}>{children}</div>
    )
}