import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer/Footer";
import Cookie from "./Cookie";
// type AppLayoutProps = {
//   children: ReactNode;
// };

export default function AppLayout() {
  return (
    <>
      <Cookie />
      <NavBar />
      {/* <main className="bg-stone-900"> */}
      <main className="dark:text-white dark:bg-teal-950 duration-300">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
