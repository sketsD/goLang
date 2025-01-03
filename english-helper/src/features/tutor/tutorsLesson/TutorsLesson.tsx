import { Outlet } from "react-router-dom";
import TabSlider from "../../../ui/TabSlider";
import TutorsFrame from "../TutorsFrame";

export default function TutorLesson() {
  const indexUrl = "/tutor-cabinet/tutors-card";
  const links = [
    { name: "Upcomming", path: "" },
    { name: "History", path: "history" },
    { name: "Live lesson", path: "live" },
  ];

  return (
    <TutorsFrame title="Your Card">
      <>
        <TabSlider indexUrl={indexUrl} links={links} />
        <div className="mb-8">
          <div className="w-[65vw] m-auto">
            <Outlet />
          </div>
        </div>
      </>
    </TutorsFrame>
  );
}
