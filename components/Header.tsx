import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            alt=""
            className="w-44 object-contain cursor-pointer"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <div>About</div>
          <div>Contact</div>
          <div className="text-white bg-teal-500 rounded-full px-4 py-1">
            Follow
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-teal-500">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-teal-500">Get Started</h3>
      </div>
    </header>
  );
};

export default Header;
