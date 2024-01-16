import Contact from "@/components/molecules/Contact";
import Education from "@/components/molecules/Education";
import Experience from "@/components/molecules/Experience";
import Profile from "@/components/molecules/Profile";
import Projects from "@/components/molecules/Projects";
import Skills from "@/components/molecules/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh] w-full">
      <Profile />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
