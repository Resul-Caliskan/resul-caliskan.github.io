// components/Cursor.js
import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursorInner = document.getElementById("cursor-inner");
    const cursorOuter = document.getElementById("cursor-outer");
    const links = document.querySelectorAll("a,label,button");

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorInner.style.left = `${posX}px`;
      cursorInner.style.top = `${posY}px`;

      cursorOuter.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    const addHoverListeners = () => {
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursorInner.classList.add("hover");
          cursorOuter.classList.add("hover");
        });
        link.addEventListener("mouseleave", () => {
          cursorInner.classList.remove("hover");
          cursorOuter.classList.remove("hover");
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    addHoverListeners();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-inner" id="cursor-inner"></div>
      <div className="cursor-outer" id="cursor-outer"></div>
    </>
  );
};

export default Cursor;