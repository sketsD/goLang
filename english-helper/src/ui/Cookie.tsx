import { Link } from "react-router-dom";
import CookieSvg from "../assets/svgs/CookieSvg";
import Button from "./Button";
import useToggle from "../hooks/useToggle";

export default function Cookie() {
  const [isCookieHidden, handleCookie] = useToggle(false);

  return (
    <div
      className={`fixed z-[1000] w-screen bg-white/90 dark:bg-slate-950 dark:text-white bottom-0 p-4 duration-300 ${
        isCookieHidden ? " hidden" : ""
      }`}
    >
      <div className="flex justify-center items-center py-2 gap-4 flex-col lg:flex-row">
        <CookieSvg />
        <p>
          We use cookies to ensure you have the best browsing experience on our
          website. By using our site, you acknowledge that you have read and
          understood our <span> </span>
          <Link to="/cookiespolicy" className="underline">
            Cookie Policy
          </Link>
          <span> & </span>
          <Link to="/privacypolicy" className="underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={handleCookie}
            style="colored"
            addedClass="w-20 h-10"
          >
            Accept
          </Button>
          <Button
            type="button"
            onClick={handleCookie}
            style="secondaryWhite"
            addedClass="w-20 h-10 "
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
