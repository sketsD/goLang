import { NavLink } from "react-router-dom";
import Button from "./Button";
import { type CabinetAsideItemProps } from "./CabinetAside";

const CabinetAsideItem: React.FC<CabinetAsideItemProps> = ({
  to,
  nameLink,
  icon,
}) => {
  return (
    <NavLink to={to}>
      <li className="h-full flex justify-between items-center" key={to}>
        <div className="h-full flex items-center border-b-2 border-transparent duration-300">
          <span className="">{nameLink}</span>
        </div>
        <Button style="colored" addedClass="h-12 w-12 mr-4">
          {icon}
        </Button>
      </li>
    </NavLink>
  );
};
export default CabinetAsideItem;
