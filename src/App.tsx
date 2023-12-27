import { Profile } from "@/components/Profile";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { SkillList } from "@/components/SkillList";
import { Contact } from "@/components/Contact";
import { CustomAnimatedCursor } from "@/components/CustomAnimatedCursor";
import { WorkList } from "@/components/WorkList";

export function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <SkillList />
      <WorkList />
      <Contact />
      
      <CustomAnimatedCursor />
    </>
  );
}
