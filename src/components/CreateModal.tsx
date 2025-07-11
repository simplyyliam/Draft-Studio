import type { HtmlHTMLAttributes } from "react";


export const CreatePenal: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props 
}) => {
    return (
        <div className={`flex flex-col bg-[#C7C7C7] p-[15px] w-[20em] gap-2 rounded-2xl shadow-lg ${className}`} {...props}>{children}</div>
    )
}