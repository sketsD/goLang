import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

type TabSliderProps = {
  indexUrl: string;
  links: { name: string; path: string }[];
};

const TabSlider: React.FC<TabSliderProps> = ({ indexUrl, links }) => {
  const [activeNum, setActiveNum] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const currentLink = location.pathname.split("/");
    const currentPath =
      currentLink.length === indexUrl.split("/").length + 1
        ? currentLink[currentLink.length - 1]
        : "";

    links.forEach((link, i) => {
      if (link.path === currentPath) {
        setActiveNum(i);
        return;
      }
    });
  }, [location, setActiveNum, indexUrl, links]);

  return (
    <div className="text-xl inline-block text-center rounded-full border-2  dark:bg-slate-950 p-1 dark:border-white ">
      <div className="relative flex">
        {links.map((linkObj) => (
          <NavLink
            key={linkObj.name}
            to={linkObj.path}
            className="rounded-full bg-transparent h-8 w-40 z-20 flex items-center justify-center"
          >
            <span className="inline-block">{linkObj.name}</span>
          </NavLink>
        ))}

        <div
          style={{ left: (100 / links.length) * activeNum + "%" }}
          className={`absolute rounded-full h-8 w-40 p-1 z-10 duration-300 border-2 border-black dark:bg-teal-900`}
        ></div>
      </div>
    </div>
  );
};
export default TabSlider;
