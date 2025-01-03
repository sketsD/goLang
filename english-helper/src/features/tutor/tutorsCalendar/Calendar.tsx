import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

import { useState } from "react";
import CalendarItem from "./CalendarItem";
import ArrowRightIcon from "../../../assets/svgs/ArrowRightIcon";
import ArrowLeft from "../../../assets/svgs/ArrowLeft";
import CalendarSpring from "./CalendarSpring";
import WeekDays from "./WeekDays";
import DaySchedule from "./DaySchedule";

const Calendar: React.FC = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayOfCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const thisMonthdays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayOfCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });
  const nextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };
  const prevMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };
  console.log(selectedDay);
  return (
    <div className="flex gap-3">
      <DaySchedule today={today} selectedDay={selectedDay} />
      <div className="basis-2/3 flex flex-col h-full">
        <div className="mt-4 p-2 rounded-md py-4 bg-neutral-500 text-white dark:bg-slate-950">
          <div className="flex justify-center gap-10">
            <button className="px-4" onClick={() => prevMonth()}>
              <ArrowLeft />
            </button>
            <h2 className="w-40 text-center">
              {format(firstDayOfCurrentMonth, "MMMM yyyy")}
            </h2>
            <button className="px-4" onClick={() => nextMonth()}>
              <ArrowRightIcon />
            </button>
          </div>
          <WeekDays />
          <CalendarSpring />
          <div className="shadow-2xl">
            <div className="h-6 mt-6 bg-white dark:bg-teal-900"></div>
            <div className="dark:bg-teal-900 dark:text-white grid grid-cols-7 h-[55vh] bg-white text-black relative before:absolute before:bg-slate-300 before:w-[98%]  before:h-[1%] before:-bottom-[2%] before:left-[50%] before:-translate-x-[50%] before:dark:bg-slate-900 after:absolute after:bg-slate-200 after:w-[99%]  after:h-[1%] after:-bottom-[1%] after:left-[50%] after:-translate-x-[50%] after:dark:bg-teal-950">
              {thisMonthdays.map((thisDay) => (
                <CalendarItem
                  key={thisDay.toDateString()}
                  thisDay={thisDay}
                  today={today}
                  selectedDay={selectedDay}
                  onSelectedDay={setSelectedDay}
                  firstDayOfCurrentMonth={firstDayOfCurrentMonth}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
