'use client';
import React from "react";
type Nav = {
  title : string,
  url : string
}
const Header = () => {
  const headerNavs:Nav[]  = [
    {title : 'Home', url : 'profileSection'},
    {title : 'Education', url : 'educationSection'},
    {title : 'Skills', url : 'skillSection'},
    {title : 'Experience', url : 'experienceSection'},
    {title : 'Projects', url : 'projectSection'},
    {title : 'Contact', url : 'contactSection'},
  ];
  const handleNavClick = (id:string)=>{

    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});

  } 
  return (
    <header className=" flex justify-between px-10 fixed top-0 right-0 left-0 z-100 h-[60px] shadow-slate-50">
      <div className="flex h-full items-center">LOGO</div>
      <nav className=" col-span-5 flex items-center justify-center">
        <ul className="flex gap-4 ">
          {headerNavs.map((nav: Nav) => (
            <li
              key={`${nav.title}`}
              onClick={() => {
                handleNavClick(nav.url);
              }}
              className="cursor-pointer"
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
