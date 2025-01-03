import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type SideBarLinkProps = {
  to: string;
  children: ReactNode;
};

export default function SideBarLink({ to, children }: SideBarLinkProps) {
  return (
    <li className="w-full">
      <NavLink
        className="border-b-2 w-full border-b-gray-500 py-2 transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 block"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}
