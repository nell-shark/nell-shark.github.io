import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export function CustomAnimatedCursor() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 700);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <AnimatedCursor
          color="156, 39, 176"
          innerStyle={{
            backgroundColor: "#000",
          }}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
          outerSize={8}
        />
      )}
    </>
  );
}
