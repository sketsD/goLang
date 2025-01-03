import { Outlet } from "react-router-dom";
import TutorsFrame from "../TutorsFrame";
import TabSlider from "../../../ui/TabSlider";

const indexUrl = "/tutor-cabinet/tests";
const links = [
  { name: "Tests", path: "" },
  { name: "New Test", path: "create-new-test" },
  { name: "Files", path: "files" },
  { name: "Exercises", path: "exercises" },
];

const TutorTests: React.FC = () => {
  return (
    <TutorsFrame title="Your Mateirals">
      <>
        <div className="">
          <TabSlider links={links} indexUrl={indexUrl} />
        </div>

        <div>
          <div className="w-[65vw] m-auto ">
            <Outlet />
          </div>
        </div>
      </>
    </TutorsFrame>
  );
};
export default TutorTests;
