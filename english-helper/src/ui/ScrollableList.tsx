import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollableListProps = {
  children: ReactNode;
};

const ScrollableList: React.FC<ScrollableListProps> = ({ children }) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [showTopNotch, setTopNotch] = useState(false);
  const [showBottomNotch, setBottomNotch] = useState(false);

  const checkScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      setTopNotch(scrollTop > 0);
      setBottomNotch(scrollTop < scrollHeight - clientHeight);
    }
  };
  useEffect(() => {
    checkScroll();
    listRef.current!.addEventListener("scroll", checkScroll);
    return removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className="relative"
      // style={{ boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.1)" }}
    >
      <div
        style={{ height: `${showTopNotch ? "3rem" : "1px"}` }}
        className={`absolute top-0 w-full bg-transparent transition-all duration-300 ${
          showTopNotch && "bg-gradient-to-b to-transparent from-white"
        }`}
      ></div>
      <ul ref={listRef} className="h-[65vh] overflow-y-auto mb-12">
        {children}
      </ul>
      <div
        style={{ height: `${showBottomNotch ? "3rem" : "1px"}` }}
        className={`absolute bottom-0 w-full bg-transparent transition-all duration-300 ${
          showBottomNotch && "bg-gradient-to-t to-transparent from-white"
        }`}
      ></div>
    </div>
  );
};

export default ScrollableList;
