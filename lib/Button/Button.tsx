import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
export const Button = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded">
      {children}
    </button>
  );
};
