import type { HtmlHTMLAttributes } from "react";
import React from "react";

export const ModularNav: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex items-center justify-between gap-4 p-1 bg-neutral-200 rounded-full ${className}`} {...props}>{children}</div>
    )
}

export const NavLink: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button className={`flex items-center justify-center w-[71px] p-3 rounded-full ${className}`} {...props}>{children}</button>
    )
}