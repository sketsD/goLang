import { PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedProps = PropsWithChildren & {
  allowedRoles: "admin" | "student" | "tutor";
};

export default function ProtectedRoute({
  allowedRoles,
  children,
}: ProtectedProps) {
  const { isAuth, role } = useAuth();
  if (!isAuth) return <Navigate to={"/login"} replace />;
  if (role && !allowedRoles.includes(role))
    return <Navigate to="/invalid" replace />;

  return <>{children}</>;
}
