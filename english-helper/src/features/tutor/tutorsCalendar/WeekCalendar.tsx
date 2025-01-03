import ClockIcon from "../../../assets/svgs/classRoom/ClockIcon";
import MessageIcon from "../../../assets/svgs/classRoom/MessageIcon";
import Student from "../../../assets/svgs/classRoom/Student";
import Button from "../../../ui/Button";
import WeekDays from "./WeekDays";
const totalCells = Array.from({ length: 168 }, (_, i) => i);
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
  "July 21, 1983 13:15:00",
  "July 21, 1983 18:15:00",
  "July 22, 1983 20:15:00",
  "July 23, 1983 21:15:00",
];

// const daysToPrint = time.map((day) => {
//   return { day: new Date(day).getDay(), time: new Date(day).getHours() };
// });
const daysToPrint = time.map((day) => new Date(day).getDay());

const WeekCalendar: React.FC = () => {
  console.log(daysToPrint);
  console.log(daysToPrint.indexOf(5));
  console.log(new Date("July 21, 1983 18:15:00").toUTCString());

  return (
    <div className="w-full border mt-2 dark:bg-teal-800 bg-white p-2 overflow-auto relative">
      <div className="pl-2 absolute top-0 left-0 z-30 border-b">
        <div className="w-16 h-14 dark:bg-teal-800 bg-white border-r"></div>
      </div>
      <div className="h-[70vh] overflow-auto relative">
        <div className="pl-16 w-[90vw] mr-16 sticky top-0 left-0 h-12 z-10 dark:bg-teal-800 bg-white">
          <div className="h-12 w-[90vw] relative border-b-2">
            <WeekDays />
            <div className="absolute top-0 right-0">
              <div className="w-16 h-12 dark:bg-teal-800 bg-white border-b-2"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="sticky left-0 dark:bg-teal-800 bg-white z-20">
              {hours.map((h) => (
                <div key={h}>
                  <div className="border-r border-b-2 w-16 h-14">
                    <time dateTime={h}>{h}</time>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div
                className="w-[90vw] grid grid-cols-7 grid-flow-col relative"
                style={{ gridTemplateRows: "repeat(24, minmax(0,1fr))" }}
              >
                {totalCells.map((i) => (
                  <div key={i} className="w-full">
                    <div className="border-b border-r h-7 -z-10"></div>
                    <div className="border-b-2 border-r h-7 -z-10"></div>
                  </div>
                ))}

                {time.map((lesson) => (
                  <div
                    className={`absolute h-14 rounded-xl ${
                      eventColors[
                        Math.floor(Math.random() * eventColors.length)
                      ]
                    }`}
                    style={{
                      width: "14.2857%",
                      left: `${(14.2857 * new Date(lesson).getDay()).toFixed(
                        4
                      )}%`,
                      top: `${(4.1666 * new Date(lesson).getHours()).toFixed(
                        4
                      )}%`,
                    }}
                  >
                    {/* <p className="text-center">
                      Lesson with Peter at {new Date(lesson).getHours()}:00
                    </p> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeekCalendar;
