import React, { ComponentPropsWithoutRef } from "react";
import EyeSlash from "../../assets/svgs/VisibilityIcons/EyeSlash";
import EyeOpen from "../../assets/svgs/VisibilityIcons/EyeOpen";
import useToggle from "../../hooks/useToggle";

type PasswordFieldProps = {
  isValid: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export default function PasswordField({
  isValid,
  value,
  onChange,
  onBlur,
  ...inputProps
}: PasswordFieldProps) {
  const [isHidden, handlePasswordHidden] = useToggle(false);
  return (
    <div
      className={`flex border-2 border-gray-150 rounded-md bg-white duration-200 hover:border-gray-400 focus:border-gray-400 dark:bg-teal-900 dark:border-teal-950 ${
        isValid ? "border-red-500/40" : ""
      }`}
    >
      <input
        {...inputProps}
        type={isHidden ? "text" : "password"}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="w-[92%] px-4 py-2 outline-none duration-200 rounded-md dark:bg-teal-900"
      />
      <button
        type="button"
        className="dark:bg-teal-900 bg-white duration-200"
        onClick={handlePasswordHidden}
      >
        {isHidden ? <EyeSlash /> : <EyeOpen />}
      </button>
    </div>
  );
}
