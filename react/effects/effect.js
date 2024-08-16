import React, { useLayoutEffect,useRef, useEffect } from "react";

function App() {
    useEffect(() => {
        console.log("useEffect runs second")
      })
    
      useLayoutEffect(() => {
        console.log("useEffectLayout runs first")
      })
    
  return <div>This is app</div>;
}


/// Adding Smooth Scroll
const SmoothScrolling = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      // Smoothly scroll to the top of the container
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Scroll to the top when the component is mounted
    handleScroll();

    // Add event listener to scroll to the top on subsequent scrolls
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div ref={containerRef}>{/* Your Content */}</div>;
};

///  Animation

const AnimatingElements = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    // Animate the element's opacity on mount
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 1000);

    return () => {
      // Clean up animation when the component unmounts
      element.style.opacity = 0;
    };
  }, []);

  return <div ref={elementRef}>Animate me!</div>;
};

/// Auto focus

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

export { App , SmoothScrolling, AnimatingElements, AutoFocusInput}