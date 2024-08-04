import { ReactNode } from "react";

interface Props {
    logoText: string;
    linkOne: string;
    linkTwo: string;
    linkThree: string;
    linkFour: string;
}

export const ZenNavbar = ({ logoText, linkOne, linkTwo, linkThree, linkFour }: Props): ReactNode => {
  return (
    <nav className="bg-gray-100 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-gray-900 text-xl font-semibold">
            {logoText}
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              {linkOne}
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              {linkTwo}
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              {linkThree}
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out"
            >
              {linkFour}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

