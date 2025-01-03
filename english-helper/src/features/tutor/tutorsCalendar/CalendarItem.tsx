import { format, isEqual, isSameMonth, isSameWeek, isToday } from "date-fns";
const CalendarItem: React.FC<{
  thisDay: Date;
  today: Date;
  selectedDay: Date;
  firstDayOfCurrentMonth: Date;
  onSelectedDay: React.Dispatch<Date>;
}> = ({
  thisDay,
  today,
  selectedDay,
  onSelectedDay,
  firstDayOfCurrentMonth,
}) => {
  const setDate = (thisDate: Date) =>
    !isEqual(thisDate, selectedDay) && onSelectedDay(thisDate);

  return (
    <button
      onClick={() => setDate(thisDay)}
      className={`
${isSameWeek(thisDay, today) && "bg-slate-100 dark:bg-slate-100/10"}
${
  !isEqual(thisDay, selectedDay) &&
  isToday(thisDay) &&
  "border-red-500 bg-slate-100 dark:bg-slate-100/10"
}
${!isSameMonth(thisDay, firstDayOfCurrentMonth) && "text-gray-400"}
${
  isEqual(thisDay, selectedDay) &&
  isToday(thisDay) &&
  "border-red-500 border-dashed bg-slate-100 dark:bg-slate-100/10"
}
${
  isEqual(thisDay, selectedDay) &&
  !isToday(thisDay) &&
  "border-dashed border-gray-400"
}
${
  !isEqual(thisDay, selectedDay) &&
  !isToday(thisDay) &&
  "hover:bg-gray-300/40 hover:dark:bg-gray-300/20"
}
 
${isEqual(thisDay, today) || (isToday(thisDay) && "font-bold")}
${
  !isEqual(thisDay, selectedDay) &&
  !isEqual(thisDay, today) &&
  "border-transparent"
}

border-4 `}
    >
      <time dateTime={format(thisDay, "yyyy-MM-dd")}>
        {format(thisDay, "d")}
      </time>
    </button>
  );
};

export default CalendarItem;
