import type { HtmlHTMLAttributes, ButtonHTMLAttributes } from "react";
import React from "react";

export const ModularNav: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={`flex items-center justify-between gap-4 p-1 rounded-full border-2 border-[#ECECEC] shadow-[inset_0_4px_7px_-3px_#01010125] ${className}`} {...props}>{children}</div>
    )
}

export const NavLink: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button className={`flex items-center justify-center w-[71px] p-3 rounded-full cursor-pointer hover:shadow-[0px_4px_15px_-3px_#FFAC40] hover:bg-[#FFAC40] hover:text-white transition ease-linear ${className}`} {...props}>{children}</button>
    )
}