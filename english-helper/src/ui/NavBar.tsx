import NanBarLink from "./NavBarLink";
import { Link } from "react-router-dom";
import SmallScreenSideBar from "./SmallScreenSideBar";
import { useState } from "react";
import Button from "./Button";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";
import DarkModeToggle from "./DarkModeToggle";
import { useAuth } from "../hooks/useAuth";
import { useUserDispatch } from "../store/hooks";
import { logOut } from "../store/slices/authSlice";

export default function NavBar() {
  const dispatch = useUserDispatch();
  const userAuth = useAuth();
  const fullName = userAuth.fullName;
  const role = userAuth.role;
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="dark:text-white">
      <nav className="flex justify-between p-4 bg-white duration-300 w-full fixed z-50 dark:bg-slate-950 h-20 shadow-md">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-3xl pr-10 font-medium underline cursor-pointer text-nowrap"
          >
            d
            <span>
              <span className="inline-block duration-300 py-2 px-2 bg-emerald-400 rounded-full  dark:bg-teal-950"></span>
            </span>
            Lang
          </Link>

          {/* <span> </span>
          <div
            id="navBarElement"
            className="hidden tracking-normal  space-x-8 lg:flex"
          >
            <NanBarLink to="/tutor">Find tutors</NanBarLink>
            <NanBarLink to="/buisness">Companies training</NanBarLink>
            <NanBarLink to="/login">Become a tutor</NanBarLink>
          </div> */}
        </div>
        <div className=" items-center gap-8 flex">
          <p>{fullName ? `${fullName}` : ""}</p>

          <button className="border-2" onClick={() => dispatch(logOut())}>
            log Out
          </button>
          <DarkModeToggle />
          <select
            name="language"
            id="language"
            className="bg-transparent hidden lg:block"
          >
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
          <Button
            to={userAuth.isAuth ? `/${role}-cabinet` : "/login"}
            style="colored"
            addedClass="hidden lg:px-10 lg:flex lg:border-2 lg:border-black lg:text-black lg:py-2 hover:bg-white hover:gap-3 hover:pl-9"
          >
            <BoxArrowIcon />
            {userAuth.isAuth ? "My cabinet" : "Log in"}
          </Button>

          <button onClick={handleIsOpen}>
            <div className="lg:hidden space-y-2">
              <span className="block h-0.5 w-8  bg-slate-900 dark:bg-white"></span>
              <span className="block h-0.5 w-8  bg-slate-900 dark:bg-white"></span>
              <span className="block h-0.5 w-8  bg-slate-900 dark:bg-white"></span>
            </div>
          </button>
          {isOpen && (
            <SmallScreenSideBar onOpen={handleIsOpen}>
              <button
                onClick={handleIsOpen}
                className="cursor-pointer z-50 absolute left-[92%] bottom-[97%]"
              >
                <div>
                  <span className="block h-1 w-8 rotate-45 bg-gray-600  dark:bg-white"></span>
                  <span className="block relative bottom-1 h-1 w-8 -rotate-45 bg-gray-600 dark:bg-white"></span>
                </div>
              </button>
            </SmallScreenSideBar>
          )}
        </div>
      </nav>
    </header>
  );
}
