import { format, isToday } from "date-fns";
import { useEffect, useRef } from "react";
import ClockIcon from "../../../assets/svgs/classRoom/ClockIcon";
import Button from "../../../ui/Button";
import MessageIcon from "../../../assets/svgs/classRoom/MessageIcon";
import Student from "../../../assets/svgs/classRoom/Student";

const eventColors = [
  "bg-red-400/10",
  "bg-emerald-500/10",
  "bg-amber-500/10",
  "bg-lime-500/10",
  "bg-sky-500/10",
  "bg-purple-500/10",
  "bg-pink-500/10",
  "bg-gray-300/20",
  "bg-gray-600/20",
  "bg-zinc-600/20",
  "bg-orange-950/20",
];

const time = [
  "July 21, 1983 12:15:00",
  "July 21, 1983 20:15:00",
  "July 21, 1983 19:15:00",
];

// const hours = Array.from({ length: 24 }, (_, i) => i);
const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

const DaySchedule: React.FC<{ today: Date; selectedDay: Date }> = ({
  selectedDay,
}) => {
  console.log(parseInt(time[0]));
  const listItem = useRef<HTMLOListElement | null>(null);
  useEffect(() => {
    if (isToday(selectedDay)) {
      const now = new Date();
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      const nowTotalMinutes = nowHours * 60 + nowMinutes;
      const listOfTime = Array.from<HTMLTimeElement | null>(
        listItem.current?.getElementsByTagName("time") || []
      );

      let globalDifference: number = Infinity;
      let closestTime: string = "";

      time.forEach((lessonTime) => {
        const lessonHours = new Date(lessonTime).getHours();
        const lessonMinutes = new Date(lessonTime).getMinutes();
        const lessonTotalMinutes = lessonHours * 60 + lessonMinutes;

        const difference = Math.abs(nowTotalMinutes - lessonTotalMinutes);
        if (globalDifference > difference) {
          globalDifference = difference;
          closestTime = `${lessonHours}:00`;
        }
      });
      const closestItem =
        listOfTime.find((item) => item?.dateTime === closestTime) ||
        listOfTime[0];
      closestItem!.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  return (
    <div className="mt-4 p-4 basis-1/3 rounded-lg border dark:bg-teal-900">
      <div className="flex flex-col">
        <div className="basis-2/12">{format(selectedDay, "dd MMMM")}</div>
        <div className="flex flex-col h-full w-full basis-10/12">
          <ol
            ref={listItem}
            className="h-[70vh] overflow-y-auto overflow-x-hidden flex flex-col relative"
          >
            {hours.map((h) => (
              <li key={h} className="flex w-full">
                <time className="border-r border-b w-16 h-14" dateTime={h}>
                  {h}
                </time>

                <div className="w-full">
                  <div className="border-b h-7"></div>
                  <div className="border-b h-7"></div>
                </div>
              </li>
            ))}
            {time.map((timeCur) => (
              <div
                style={{ top: `${new Date(timeCur).getHours() * 3.5}rem` }}
                className={`absolute mx-16 border-b w-[84%] h-14 pl-2 rounded-lg ${
                  eventColors[Math.floor(Math.random() * eventColors.length)]
                }`}
              >
                <li className="flex justify-between items-center py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2">
                      <Student />
                      <p>Zoe Liner</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mr-2">
                    <Button style="mainWhite" addedClass="h-2 px-2">
                      <MessageIcon />
                    </Button>
                    <Button style="mainWhite" addedClass="h-2 px-2">
                      <ClockIcon />
                    </Button>
                  </div>
                  {/* <div className="flex gap-2">
                    <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
                      First lesson
                    </Button>
                    <Button style="secondaryWhiteColored" addedClass="h-2 px-3">
                      Request changes <ClockIcon />
                    </Button>
                  </div> */}
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;
