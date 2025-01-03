import { ReactNode, useEffect, useRef } from "react";
import SideBarLink from "./SideBarLink";
import Button from "./Button";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";

type SmallScreenSideBar = {
  children: ReactNode;
  onOpen: () => void;
};

export default function SmallScreenSideBar({
  children,
  onOpen,
}: SmallScreenSideBar) {
  const aside = useRef<null | HTMLDivElement>(null);
  const clickOutside = (event: Event) => {
    if (aside.current && aside.current.contains(event.target as Node)) {
      onOpen();
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });

  return (
    <div
      className=" absolute w-screen h-screen top-0 left-0 flex z-40 "
      ref={aside}
    >
      <div className="basis-0 backdrop-blur-sm bg-slate-200/30 md:basis-3/6 dark:bg-teal-950/50"></div>
      <ul className=" basis-full flex flex-col bg-slate-100 p-8 justify-between md:basis-3/6 dark:bg-teal-950">
        <div className="relative">
          {children}
          <div
            id="sideBarElement"
            className="space-y-4 mt-9 tracking-wide font-medium"
          >
            <SideBarLink to="/tutor">Find tutors</SideBarLink>
            <SideBarLink to="/buisness">Companies training</SideBarLink>
            <SideBarLink to="/login">Become a tutor</SideBarLink>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <select name="language" id="language" className="bg-transparent">
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
          <Button to="/login" style="secondaryBlack" addedClass="hover:gap-6">
            Log in
            <BoxArrowIcon />
          </Button>
        </div>
      </ul>
    </div>
  );
}
