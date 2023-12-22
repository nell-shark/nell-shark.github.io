import { Profile } from "./components/Profile";
import { Navbar } from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import { About } from "./components/About";

export function App() {
  return (
    <>
      <Navbar />
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
      <Profile />
      <About />
    </>
  );
}
