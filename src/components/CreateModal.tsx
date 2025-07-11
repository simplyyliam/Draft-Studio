import type { HtmlHTMLAttributes } from "react";


export const CreatePenal: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props 
}) => {
    return (
        <div className={`flex flex-col gap-6 p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl min-w-[340px] border border-white/60 ${className}`} {...props}>{children}</div>
    )
}