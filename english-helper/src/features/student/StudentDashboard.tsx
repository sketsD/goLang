import { Outlet } from "react-router-dom";
import NavBar from "../../ui/NavBar";

export default function TutorDashboard() {
  return (
    <>
      <NavBar />
      <main className="pt-20 dark:text-white dark:bg-teal-950 duration-300">
        <Outlet />
        Student's Cabinet
      </main>
    </>
  );
}
