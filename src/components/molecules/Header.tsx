import React from "react";

const Header = () => {
  return (
    <header className="text-[--platinum-color] flex justify-between px-10 fixed top-0 right-0 left-0 z-100 bg-[--background-color] opacity-90 h-[60px] shadow-slate-50">
      <div className="flex h-full items-center">LOGO</div>
      <nav className=" col-span-5 flex items-center justify-center">
        <ul className="flex gap-4 ">
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
