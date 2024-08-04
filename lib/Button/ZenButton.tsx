import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
export const ZenButton = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className="text-white text-xl bg-black rounded-md px-4 py-2">
      {children}
    </button>
  );
};
