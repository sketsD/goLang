import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  style:
    | "mainBlack"
    | "secondaryBlack"
    | "mainWhite"
    | "secondaryWhite"
    | "secondaryWhiteColored"
    | "colored";
  children: ReactNode;
  addedClass?: string;
  to?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;

const stylesMap = new Map([
  [
    "mainBlack",
    "border-black bg-black text-white hover:bg-white hover:border-white hover:text-black dark:bg-slate-950 ",
  ],
  [
    "secondaryBlack",
    "border-black bg-black text-white hover:border-white hover:bg-stone-900 dark:bg-slate-950 hover:bg-gray-800  ",
  ],
  [
    "mainWhite",
    "border-white hover:text-white hover:bg-black hover:border-black dark:hover:bg-slate-950",
  ],
  [
    "secondaryWhite",
    "border-black text-black hover:bg-white dark:hover:bg-gray-800 dark:text-white dark:border-white",
  ],
  [
    "secondaryWhiteColored",
    "border-black text-black hover:bg-emerald-400 dark:hover:bg-gray-800 dark:text-white dark:border-white",
  ],
  [
    "colored",
    "border-black text-black bg-emerald-400 hover:bg-white dark:bg-teal-950 dark:border-white dark:text-white dark:hover:bg-slate-950",
  ],
]);

export default function Button({
  style,
  children,
  addedClass,
  to,
  onClick,
  ...buttonProps
}: ButtonProps) {
  addedClass = addedClass === undefined ? "" : addedClass;
  const stylesBtn = stylesMap.get(style);
  if (to === undefined)
    return (
      <button
        {...buttonProps}
        onClick={onClick}
        className={`flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 py-4 border-2 ${stylesBtn} ${addedClass}`}
      >
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 py-4  border-2 ${stylesBtn} ${addedClass}`}
    >
      {children}
    </Link>
  );
}
