import { type ReactNode } from "react";

type AppFrameProps = {
  children: ReactNode;
};

export default function AppFrame({ children }: AppFrameProps) {
  return <div className="mx-auto max-w-screen-xl">{children}</div>;
}
