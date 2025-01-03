import { ComponentPropsWithoutRef, ReactNode } from "react";

type LabelProps = {
  isValid: boolean;
  additionalClass?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"label">;

export default function Label({
  isValid,
  children,
  additionalClass,
  ...labelProps
}: LabelProps) {
  return (
    <label
      {...labelProps}
      className={`${
        isValid ? "text-red-500/80 " : "text-inherit"
      } ${additionalClass}`}
    >
      {children}
    </label>
  );
}
