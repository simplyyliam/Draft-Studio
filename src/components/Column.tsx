import type { HtmlHTMLAttributes } from "react";
import type React from "react";

export const Column: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col bg-white/70 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl w-[20em] max-h-30 p-4 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};