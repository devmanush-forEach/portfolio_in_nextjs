"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollLayout = ({ children, classList, id}: { children: any; classList?: string;id :string }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const parentRef = useRef<any>();

  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      const windowHeight = window.innerHeight;
      const scrollData = parentRef.current.getBoundingClientRect();
      const isScrolledY = scrollData.height - windowHeight < -scrollData.top;
      if (isScrolledY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <div id={`${id}`} ref={parentRef} className="min-h-[100vh] w-full">
      <section
        className={`${
          isScrolled ? " fixed bottom-0 right-0 left-0 " : " relative "
        }   min-w-full ${classList} `}
      >
        {children}
      </section>
    </div>
  );
};

export default ScrollLayout;
