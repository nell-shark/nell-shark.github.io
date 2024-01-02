import AnimatedCursor from "react-animated-cursor";
import "./CustomAnimatedCursor.css";

export function CustomAnimatedCursor() {
  return (
    <div id="animated-cursor">
      <AnimatedCursor
        color="156, 39, 176"
        innerStyle={{
          backgroundColor: "#000"
        }}
        outerStyle={{
          mixBlendMode: "exclusion"
        }}
        outerSize={8}
      />
    </div>
  );
}
