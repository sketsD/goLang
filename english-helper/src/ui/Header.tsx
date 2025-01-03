import Colage from "./Colage";
import AppFrame from "./AppFrame";
import Button from "./Button";
import ArrowRightIcon from "../assets/svgs/ArrowRightIcon";

export default function Header() {
  return (
    <div className="duration-200 bg-emerald-400 py-20 shadow-xl px-2 dark:bg-teal-950">
      <AppFrame>
        <div className="flex gap-9 flex-col-reverse items-center pt-6 justify-center xl:justify-start lg:flex-row lg:items-stretch md:pt-14">
          <div className="basis-1/3 flex flex-col justify-around mx-5 lg:mx-1">
            <h1 className="text-5xl font-semibold md:text-6xl tracking-tight sm:tracking-tighter ">
              Learn language with your best language tutor.
            </h1>
            <Button
              to="/login"
              style="secondaryBlack"
              addedClass="mt-5 md:gap-10 lg:mr-20 hover:gap-14"
            >
              Get Started
              <ArrowRightIcon />
            </Button>
          </div>
          <Colage src="/imgs/hero1.avif" alt="Online lesson" />
        </div>
      </AppFrame>
    </div>
  );
}
