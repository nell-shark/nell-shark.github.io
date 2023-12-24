import { Profile } from "@/components/Profile";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import AnimatedCursor from "react-animated-cursor";


export function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
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
    </>
  );
}
