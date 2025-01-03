import AppFrame from "../AppFrame";
import { Link } from "react-router-dom";
import Button from "../Button";
import FooterBlock from "./FooterBlock";
import GooglePlayIcon from "../../assets/svgs/GooglePlayIcon";
import AppleLogoIcon from "../../assets/svgs/AppleLogoIcon";
import SocialMedia from "../../assets/svgs/SocialMedia";

const appleLink = "https://www.apple.com/store";
const googleLink = "https://play.google.com/store/apps";

export default function Footer() {
  return (
    <footer className="bg-neutral-600 text-white  dark:bg-teal-950  ">
      <AppFrame>
        <div className="grid sm:grid-cols-3 xl:grid-cols-5 py-12 dark:border-0 dark:border-t dark:border-white">
          <FooterBlock />

          <div className="sm:col-span-3 xl:col-span-2  p-4 ">
            <h5 className="p-4 border-b  border-white">Work with us</h5>
            <div className="flex h-fit gap-2 sm:gap-4 mt-3 flex-wrap">
              <Button to={googleLink} style="mainBlack" addedClass="px-10">
                <GooglePlayIcon />
                Google Play
              </Button>
              <Button to={appleLink} style="mainWhite" addedClass="px-11">
                <AppleLogoIcon />
                App Store
              </Button>
            </div>
            <h5 className="p-4 border-b mt-4 border-white">
              Follow us in Social Media
            </h5>
            <div className="flex flex-wrap h-fit gap-2 mt-3">
              {SocialMedia.map((SocialMedia) => (
                <Button
                  // Key to be changed
                  key={SocialMedia.link}
                  to={SocialMedia.link}
                  style="mainWhite"
                  addedClass="px-4"
                >
                  <SocialMedia.icon />
                </Button>
              ))}
            </div>
            <h5 className="p-4 border-b mt-4 border-white">
              Our Contact information
            </h5>
            <div className="flex flex-col h-fit gap-1 mt-3">
              <a href="tel:+4733378901">+ 470 333 78 901</a>
              <a href="tel:+4733378901">+ 380 333 38 288</a>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex mt-4 py-4 gap-3 px-4 flex-wrap sm:gap-10">
          <p>© 2013-{`${new Date().getFullYear()}`} doLang Inc.</p>
          <span className="underline font-thin font-small">
            <Link to={""}>Legal Center</Link>
            <span className="mx-2"></span>
            <Link to={"/privacypolicy"}>Privacy Policy</Link>
            <span className="mx-2"></span>
            <Link to={"/cookiespolicy"}>Cookie Policy</Link>
          </span>
        </div>
      </AppFrame>
    </footer>
  );
}
