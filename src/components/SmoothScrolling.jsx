import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
    });

    scroll.update();

    // Update scroll when route changes
    scroll.scrollTo(0, { duration: 0, disableLerp: true });

    return () => {
      scroll.destroy();
    };
  }, [location]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
