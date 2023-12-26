import { Profile } from "@/components/Profile";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";
import { CustomAnimatedCursor } from "@/components/CustomAnimatedCursor";


export function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Works />
      <Contact />
      <CustomAnimatedCursor />
    </>
  );
}
