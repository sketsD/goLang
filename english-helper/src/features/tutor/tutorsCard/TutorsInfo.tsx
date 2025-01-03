import { Outlet } from "react-router-dom";
import TutorsFrame from "../TutorsFrame";
import TabSlider from "../../../ui/TabSlider";

const indexUrl = "/tutor-cabinet/tutors-card";
const links = [
  { name: "My Card", path: "" },
  { name: "Edit Card", path: "edit" },
];

export default function TutorsInfo() {
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
