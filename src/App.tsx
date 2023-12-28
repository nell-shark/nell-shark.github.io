import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CustomAnimatedCursor } from "@/components/CustomAnimatedCursor";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { SkillList } from "@/components/SkillList";
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
