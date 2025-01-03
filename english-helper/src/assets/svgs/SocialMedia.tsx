import WhatsappIcon from "./socialMediaIcons/WhatsappIcon";
import InstagramIcon from "./socialMediaIcons/InstagramIcon";
import TwitterIcon from "./socialMediaIcons/TwitterIcon";
import TelegramIcon from "./socialMediaIcons/TelegramIcon";
import FacebookIcon from "./socialMediaIcons/FacebookIcon";

const facebookLink = "https://www.facebook.com/";
const instagramLink = "https://www.instagram.com/";
const telegramLink = "https://web.telegram.org/";
const twitterLink = "https://x.com/";
const whatsappLink = "https://web.whatsapp.com/";

const icons = [
  { icon: WhatsappIcon, link: whatsappLink },
  {
    icon: InstagramIcon,
    link: instagramLink,
  },
  {
    icon: TwitterIcon,
    link: twitterLink,
  },
  {
    icon: TelegramIcon,
    link: telegramLink,
  },
  {
    icon: FacebookIcon,
    link: facebookLink,
  },
];
export default icons;
