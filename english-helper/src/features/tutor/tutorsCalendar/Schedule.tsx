// import { Outlet } from "react-router-dom";
import TutorsFrame from "../TutorsFrame";
// import TabSlider from "../../../ui/TabSlider";
import { useState } from "react";
import Calendar from "./Calendar";
import WeekCalendar from "./WeekCalendar";
import Button from "../../../ui/Button";
import UpcommingLessons from "../tutorsLesson/UpcommingLessons";
import DailySchedule from "./DailySchedule";

const Schedule: React.FC = () => {
  const buttons = ["month", "week", "day"];
  const [activeNum, setActiveNum] = useState(0);
  return (
    <TutorsFrame title="Schedule">
      <>
        <div className="flex flex-row">
          <div className="text-xl inline-block text-center rounded-full border-2  dark:bg-slate-950 p-1 dark:border-white ">
            <div className="relative flex">
              {buttons.map((btn, i) => (
                <button
                  key={btn}
                  onClick={() => {
                    setActiveNum(i);
                  }}
                  className="rounded-full bg-transparent h-8 w-40 z-20 flex items-center justify-center"
                >
                  <span className="inline-block">{btn}</span>
                </button>
              ))}

              <div
                style={{ left: (100 / buttons.length) * activeNum + "%" }}
                className={`absolute rounded-full h-8 w-40 p-1 z-10 duration-300 border-2 border-black dark:bg-teal-900`}
              ></div>
            </div>
          </div>
          <div className="self-end">
            <Button style="colored" addedClass="h-6">
              sync with google
            </Button>
          </div>
        </div>

        <div>
          {activeNum === 0 ? (
            <Calendar />
          ) : activeNum === 1 ? (
            <WeekCalendar />
          ) : (
            <DailySchedule />
          )}
        </div>
      </>
    </TutorsFrame>
  );
};
export default Schedule;
