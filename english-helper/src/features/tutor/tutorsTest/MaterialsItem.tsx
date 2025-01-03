import { NavLink } from "react-router-dom";
import { useUserDispatch } from "../../../store/hooks";
import { deleteTest } from "../../../store/slices/testSlice";
import Pencil from "../../../assets/svgs/Pencil";
import Trash from "../../../assets/svgs/Trash";

type MaterialsItemProps = {
  testName: string;
  testLength: number;
  testDuration: string;
  testId: string;
};
const MaterialsItem: React.FC<MaterialsItemProps> = ({
  testName,
  testDuration,
  testLength,
  testId,
}) => {
  const dispatch = useUserDispatch();
  return (
    <li className="grid grid-cols-10 py-2 border-b hover:border-gray-500 duration-300 pl-4 bg-transparent">
      <div className="col-span-7 pr-5">{testName}</div>
      <div className="mx-auto">{testLength}</div>
      <div className="mx-auto">{testDuration}</div>
      <div className="flex items-start justify-end gap-4">
        <NavLink
          to={"edit-test/" + testId}
          className="hover:text-yellow-500 duration-100"
        >
          <Pencil />
        </NavLink>
        <button
          className="hover:text-red-500 duration-100"
          onClick={async () => {
            await dispatch(deleteTest(testId));
          }}
        >
          <Trash />
        </button>
      </div>
    </li>
  );
};
export default MaterialsItem;
