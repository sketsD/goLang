import { tutorsCard } from "../../../data/tutorsCard";
import { useEffect, useState } from "react";
import CabinetMessage from "../../../ui/CabinetMessage";
import TutorsCardItem from "./TutorsCardItem";
// import { Link } from "react-router-dom";
const tutorsCardData = tutorsCard || null;

export default function TutorsCard() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(!isVisible);
  }, []);
  return (
    <>
      <div className="flex gap-4 min-h-[40vh] pt-5 items-center">
        <div className="basis-5/6">
          <TutorsCardItem tutorsData={tutorsCardData} />
          <div className="mt-4"></div>
        </div>
        <div
          className={`basis-1/6 mt-4  transform transition-transform duration-700 shadow-xl ${
            isVisible ? "translate-x-0" : "translate-x-[300%]"
          }`}
        >
          <CabinetMessage
            type="success"
            message="It appers to students this way. You can modify it any time"
          />
        </div>
      </div>
      {/* <div className="pl-4 pt-4">
        <Link to="edit">Click to modify</Link>
      </div> */}
    </>
  );
}
