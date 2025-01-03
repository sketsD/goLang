import { ReactNode } from "react";
import ArrowLeft from "../assets/svgs/ArrowLeft";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";
import AppFrame from "../ui/AppFrame";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
// import Footer from "../ui/footer/Footer";
type MessageProps = {
  title: string;
  message: string;
  linkTo?: string;
  linkName?: string;
  children?: ReactNode;
};

export default function Message({
  title,
  message,
  children,
  linkTo,
  linkName,
}: MessageProps) {
  return (
    <>
      <div className="dark:bg-teal-950 dark:text-white">
        <AppFrame>
          <div className="pt-40 h-dvh flex flex-col items-center justify-between p-4 gap-10  md:justify-center">
            <div className="flex flex-col gap-5 lg:w-1/2">
              {/* <p>
                <span className="font-bold">404</span> - Page is not found
              </p> */}
              <h2 className="font-semibold text-xl md:text-4xl xl:text-5xl underline">
                {title}
              </h2>
              <p>
                {message}
                <span> </span>
                {linkTo && (
                  <Link className="underline" to={linkTo}>
                    {linkName}
                  </Link>
                )}
              </p>
              <div className="self-center">{children}</div>
            </div>
            <div className="w-full flex flex-col-reverse gap-2 sm:flex-row lg:w-1/2">
              <div className="basis-1/2">
                <Button
                  to="/"
                  style="secondaryWhite"
                  addedClass=" gap-5 hover:gap-10 "
                >
                  <ArrowLeft />
                  Back to doLang
                </Button>
              </div>
              <div className="basis-1/2">
                <Button
                  to="/login"
                  style="colored"
                  addedClass="gap-5 hover:gap-10 "
                >
                  Log in
                  <BoxArrowIcon />
                </Button>
              </div>
            </div>
          </div>
        </AppFrame>
      </div>
      {/* <Footer /> */}
    </>
  );
}
