import CardIllustartion from "../assets/svgs/messageIllustrations/CardIllustartion";

export type CabinetMessageProps = {
  type: "success" | "warning" | "wrong" | "static";
  message: string;
};

const CabinetMessageStyles = new Map([
  ["success", "bg-transparent"],
  ["warning", "bg-yellow-500/40"],
  ["wrong", "bg-red-400/60"],
  ["static", "bg-gray-300/90"],
]);

const CabinetMessage: React.FC<CabinetMessageProps> = ({ type, message }) => {
  return (
    <>
      <div
        className={
          CabinetMessageStyles.get(type) +
          " w-full rounded-lg px-2 pt-4 border border-black flex flex-col gap-4 items-stretch dark:bg-teal-900 dark:border-white"
        }
      >
        <div className="text-xl text-center basis-2/5 ">{message}</div>
        <div className="m-auto basis-3/5">
          <CardIllustartion />
        </div>
      </div>
    </>
  );
};
export default CabinetMessage;
