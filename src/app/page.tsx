import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
