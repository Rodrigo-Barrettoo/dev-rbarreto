import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <About />

        {/* 
        <Experience />
        <TechStack />
        <Education />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
