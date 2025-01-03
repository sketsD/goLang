// import { Link } from "react-router-dom";
// import CabinetTabTitle from "../../ui/CabinetTabTitle";
import { ReactNode } from "react";

export default function TutorsFrame({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* <CabinetTabTitle title={title} /> */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[75vw] mt-4">{children}</div>
      </div>
    </>
  );
}
