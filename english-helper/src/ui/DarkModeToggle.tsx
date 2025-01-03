import Moon from "../assets/svgs/darkModeIcons/Moon";
import Sun from "../assets/svgs/darkModeIcons/Sun";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>{isDarkMode ? <Sun /> : <Moon />}</button>
  );
}
