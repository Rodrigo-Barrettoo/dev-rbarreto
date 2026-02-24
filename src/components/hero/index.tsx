"use client";

import { experienceYears } from "@/utils/experience-years";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  const enterprises = ["Grupo Boticário", "Piuna", "Kazap Tecnologia"];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 lg:pt-0">
      <div className="absolute inset-0 opacity-5 bg-linear-to-l from-primary-brand to-primary-brand/40 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full opacity-10 bg-linear-to-r from-primary-brand to-primary-brand/60 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-mono text-primary-brand text-sm mb-4 tracking-wider">
            Olá, eu sou Rodrigo
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
            Frontend
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary-brand to-primary-brand/60">
              Engineer.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mt-6">
            {experienceYears}+ anos construindo aplicações web escaláveis e de
            alta performance com{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">React Native</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span> e{" "}
            <span className="text-foreground font-medium">TypeScript</span>.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mt-10"
          >
            <Button>
              <a href="#experience">Ver experiência</a>
            </Button>

            <Button variant="outline">
              <a href="#contact">Contato</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 mt-16 text-muted-foreground"
          >
            <div className="h-px w-12 bg-border" />
            <span className="font-mono text-xs tracking-wider uppercase">
              {enterprises.join(" · ")}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
