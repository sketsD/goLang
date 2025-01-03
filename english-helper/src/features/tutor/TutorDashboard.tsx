import NavBar from "../../ui/NavBar";
import LessonIcon from "../../assets/svgs/classRoom/LessonIcon";
import HomeWorkIcon from "../../assets/svgs/classRoom/HomeWorkIcon";
import TestIcon from "../../assets/svgs/classRoom/TestIcon";
import CalendarIcon from "../../assets/svgs/classRoom/CalendarIcon";
import CardIcon from "../../assets/svgs/classRoom/CardIcon";
import CabinetAside, {
  type CabinetAsideItemProps,
} from "../../ui/CabinetAside";
import useToggle from "../../hooks/useToggle";
import { Outlet } from "react-router-dom";
import StudentsIcon from "../../assets/svgs/classRoom/StudentsIcon";

const tutorsLinks: CabinetAsideItemProps[] = [
  { to: "lesson", nameLink: "Lesson", icon: <LessonIcon /> },
  { to: "students-homework", nameLink: "Students", icon: <StudentsIcon /> },
  { to: "tests", nameLink: "Materials", icon: <TestIcon /> },
  { to: "schedule", nameLink: "Schedule", icon: <CalendarIcon /> },
  { to: "tutors-card", nameLink: "My Card", icon: <CardIcon /> },
];

const TutorDashboard: React.FC = () => {
  const [isPinned, setPin] = useToggle(false);
  return (
    <>
      <NavBar />
      <main className="pt-20 dark:text-white dark:bg-teal-950 duration-300  min-h-[100vh]">
        <div className="pl-48 ">
          <CabinetAside
            linksArray={tutorsLinks}
            onSetPin={setPin}
            isPinned={isPinned}
          />
          <div className={`duration-300 pl-4 pt-4 ${isPinned ? "pr-48" : ""}`}>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

// action getUserInfo
export default TutorDashboard;
