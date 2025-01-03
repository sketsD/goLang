import CheckIcon from "../assets/svgs/CheckIcon";
type CheckBoxInputProps = {
  id: string;
  labelValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};

export default function CheckBoxInput({
  id,
  labelValue,
  onBlur,
  onChange,
}: CheckBoxInputProps) {
  return (
    <div className="flex gap-3">
      <input
        type="checkbox"
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        className="
  relative peer shrink-0
  appearance-none w-4 h-4 border-2 border-black rounded-sm bg-white
  mt-1
  checked:bg-emerald-500 checked:border-0
  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-gray-100
  disabled:border-steel-400 disabled:bg-steel-400
  dark:checked:bg-teal-900/90
"
      />
      <label htmlFor={id}>{labelValue}</label>
      <CheckIcon />
    </div>
  );
}
