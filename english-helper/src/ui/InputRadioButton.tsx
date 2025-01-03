import { ComponentPropsWithoutRef } from "react";
type InputRadioButtonProps = {
  label: string;
  isActive: boolean;
} & ComponentPropsWithoutRef<"input">;

export default function InputRadioButton({
  isActive,
  label,
  ...inputProps
}: InputRadioButtonProps) {
  return (
    <label className={`flex ${isActive ? "underline" : ""}`}>
      <input type="radio" {...inputProps} className="hidden" />
      <span
        className={`inline-block w-6 h-6 mr-2 rounded-full border-4 border-gray-200 dark:border-white duration-100  ${
          isActive
            ? "bg-emerald-500  dark:bg-teal-700"
            : "dark:bg-gray-400 bg-white"
        }`}
      ></span>
      {label}
    </label>
  );
}
