import { ReactNode, useEffect } from "react";
import useToggle from "../hooks/useToggle";

type ModalWindowProps = {
  children: ReactNode;
};
const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useToggle(true);
  useEffect(() => {
    const onEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen();
      }
    };
    document.addEventListener("keydown", onEscapePress);
    return () => {
      document.removeEventListener("keydown", onEscapePress);
    };
  }, []);
  return (
    isOpen && (
      <div
        className="fixed z-50 top-0 left-0 h-screen w-screen flex items-center justify-center bg-slate-900/70"
        onClick={setIsOpen}
      >
        <div
          className="min-h-60 min-w-96 bg-white pt-8 p-3 relative rounded-xl border-2 border-black"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-3" onClick={setIsOpen}>
            X
          </button>
          <p>Oops...</p>
          <div className="">d</div>
          {children}
        </div>
      </div>
    )
  );
};
export default ModalWindow;
