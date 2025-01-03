const holesNum = Array.from({ length: 6 }, (_, i) => i + 1);

const CalendarSpring: React.FC = () => {
  return (
    <div className="grid grid-cols-7 mt-5">
      {holesNum.map((num) => (
        <div className="relative" key={num}>
          <div className="place-self-end w-4 h-4 rounded-full bg-white  absolute -right-2 -top-2 z-10 dark:bg-teal-950"></div>
          <div className="place-self-end w-4 h-4 rounded-full bg-zinc-200 absolute -right-2 top-10 z-10 dark:bg-teal-950"></div>
          <div className="place-self-end w-2 h-12 bg-neutral-400 rounded-full absolute -right-1 z-10 shadow-2xl"></div>
        </div>
      ))}
    </div>
  );
};
export default CalendarSpring;
