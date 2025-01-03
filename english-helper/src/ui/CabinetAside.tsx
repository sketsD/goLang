import { ReactNode } from "react";
import CabinetAsideItem from "./CabinetAsdieItem";
import PinEmpty from "../assets/svgs/PinEmpty";
import PinFilled from "../assets/svgs/PinFilled";

export type CabinetAsideItemProps = {
  to: string;
  nameLink: string;
  icon: ReactNode;
};
type AsideBArState = {
  isPinned: boolean;
  onSetPin: () => void;
};
export type CabinetAsideType = {
  linksArray: CabinetAsideItemProps[];
} & AsideBArState;

const CabinetAside: React.FC<CabinetAsideType> = ({
  linksArray,
  onSetPin,
  isPinned,
}) => {
  return (
    <aside
      id="sideBarElementNavigation"
      className={`${
        isPinned
          ? " -left-28 hover:left-0 hover:bg-neutral-600 hover:dark:bg-teal-900 hover:shadow-xl "
          : "  left-0 bg-neutral-600 dark:bg-teal-900 shadow-xl "
      } h-screen w-48 fixed text-white  duration-300`}
    >
      <div className="h-full ">
        <div className="pl-4 h-full z-10 relative">
          <ul
            className="h-full flex flex-col justify-center w-full gap-4"
            id="dashboard"
          >
            <button className="absolute left-40 top-4" onClick={onSetPin}>
              {isPinned ? <PinEmpty /> : <PinFilled />}
            </button>
            {linksArray.map((navLink) => (
              <CabinetAsideItem
                key={navLink.to}
                to={navLink.to}
                nameLink={navLink.nameLink}
                icon={navLink.icon}
              />
            ))}

            {/* Link with notification */}
            {/*            <NavLink to="calendar">
              <li className="flex justify-between items-center">
                <div className="h-full flex items-center border-b-2 border-transparent duration-300">
                  <span>Calendar</span>
                </div>

                <Button style="colored" addedClass="h-12 w-12 mr-2 relative">
                  <div className="w-5 h-5 rounded-full dark:bg-white text-white absolute left-[75%] bottom-[75%] flex justify-center items-center bg-black dark:text-black">
                    1
                  </div>
                  <CalendarIcon />
                </Button>
              </li>
            </NavLink>*/}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default CabinetAside;
