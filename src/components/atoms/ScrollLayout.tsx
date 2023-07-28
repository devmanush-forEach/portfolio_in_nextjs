"use client";
import React, { useEffect, useRef, useState } from "react";
import { getCombinedNodeFlags } from "typescript";

const ScrollLayout = ({
  children,
  classList,
}: {
  children: any;
  classList?: string;
}) => {
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
    <div ref={parentRef} className="h-[150vh] w-[100vw]">
      <section
        className={`${
          isScrolled ? " fixed bottom-0 right-0 left-0 " : " relative "
        }   min-w-[100vw] ${classList} `}
      >
        {children}
      </section>
    </div>
  );
};

export default ScrollLayout;
