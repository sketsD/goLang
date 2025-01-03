import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
type NavBarLinkProps = {
  children: ReactNode;
  to: string;
};

export default function NanBarLink({ to, children }: NavBarLinkProps) {
  return (
    <NavLink
      className="tracking-wide font-medium border-b border-transparent hover:border-emerald-600 dark:hover:border-white"
      to={to}
    >
      {children}
    </NavLink>
  );
}
