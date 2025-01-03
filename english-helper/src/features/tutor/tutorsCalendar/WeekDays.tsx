const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// const SHORTWEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeekDays: React.FC = () => {
  return (
    <div className="grid grid-cols-7">
      {WEEKDAYS.map((weekDay) => (
        <div key={weekDay} className="place-self-center">
          {weekDay}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
