import { useUserSelector } from "../store/hooks";
import { UserType } from "../store/slices/authSlice";

export function useAuth() {
  const userData = useUserSelector((state) => state.auth.user) as UserType;
  console.log(userData);
  if (userData === null)
    return {
      isAuth: false,
      role: null,
      uid: null,
      fullName: null,
      email: null,
    };
  const { role, fullName, email, uid } = userData;
  return {
    isAuth: !!email,
    role,
    uid,
    fullName,
    email,
  };
}
