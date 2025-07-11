import type { HtmlHTMLAttributes } from "react";

export const Create: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 p-1 h-[60px] w-[130px] rounded-full border-2 border-[#ECECEC] shadow-[inset_0px_4px_7px_1px_#01010125] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
