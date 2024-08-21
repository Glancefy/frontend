import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";

function Navbar() {
  const handleOnLogoClick = () => {
    console.log("Navigate to home page");
  };

  return (
    <div
      className="flex items-center justify-between h-16
    bg-slate-200 border-b border-slate-300 px-4
    dark:bg-slate-900 dark:border-slate-700"
    >
      <div
        className="flex items-center pr-3
        transition duration-300 ease-in-out
      hover:cursor-pointer hover:text-slate-700
      dark:hover:text-slate-300
      "
        onClick={handleOnLogoClick}
      >
        <Logo />
        <h1 className="text-2xl font-bold ml-2">Glancefy</h1>
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
