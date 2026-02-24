"use client";

import { experienceYears } from "@/utils/experience-years";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary-brand text-sm mb-2">01.</p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Sobre mim
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Frontend Engineer com {experienceYears}+ anos de experiência no
            desenvolvimento de aplicações web e mobile escaláveis e de alta
            performance. Atuação em{" "}
            <span className="text-foreground">projetos enterprise</span> no
            Grupo Boticário, atendendo clientes como{" "}
            <span className="text-foreground">Engie</span>,{" "}
            <span className="text-foreground">Duas Rodas</span>,{" "}
            <span className="text-foreground">Renner</span> e{" "}
            <span className="text-foreground">AB InBev</span>, contribuindo para
            a evolução de aplicações críticas e de grande escala.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            Atuo no desenho de arquiteturas frontend com foco em experiência do
            usuário, performance e escalabilidade, desenvolvendo aplicações web
            com React e Next.js e soluções mobile com React Native. Possuo forte
            experiência em integração frontend-backend, consumo de APIs REST e
            GraphQL e também em integrações e serviços backend com Node.js,
            contribuindo para eficiência, qualidade e manutenibilidade das
            aplicações.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Bacharel em Engenharia de Software, com formação complementar pelo
            Bootcamp GoStack da Rocketseat, com experiência na construção de
            soluções full stack e colaboração em decisões técnicas e
            arquiteturais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
