"use client";

import { motion } from "framer-motion";
import {
  ExperienceItem,
  type ExperienceItemProps,
} from "./_components/experience-item";

type JobProps = Omit<ExperienceItemProps, "index">;
const jobs: JobProps[] = [
  {
    company: "Grupo Boticário",
    role: "Software Engineer",
    period: "Jul/2024 – Fev/2026",
    description:
      "Desenvolvimento de aplicações enterprise para grandes clientes como Engie, Renner e AB InBev, atuando principalmente na arquitetura frontend e contribuindo em integrações e serviços backend, com foco em escalabilidade, performance e experiência do usuário.",
    highlights: [
      "Definição e implementação de arquitetura de micro-frontends com Vite.js, aumentando escalabilidade e desacoplamento entre módulos",
      "Integração com APIs REST e GraphQL e otimização da comunicação frontend-backend",
      "Contribuição em integrações e serviços backend com Node.js",
      "Otimização de performance e experiência do usuário em aplicações de grande escala",
      "Definição de padrões e arquitetura frontend adotados entre módulos da plataforma",
    ],
    results: [
      "Redução de over-fetching e melhoria significativa de performance",
      "Padronização arquitetural entre módulos frontend",
      "Aumento de escalabilidade e manutenibilidade das aplicações",
    ],
  },

  {
    company: "Piuna",
    role: "Software Engineer (Freelance / Part-time)",
    period: "Jan/2024 – Atual",
    description:
      "Atuação como frontend engineer no desenvolvimento da plataforma Custa Barato, participando da evolução da arquitetura da aplicação, integrações e otimização da experiência de compra.",
    highlights: [
      "Desenvolvimento do frontend com React e Next.js com definição de arquitetura e padrões de componentização",
      "Implementação de integrações GraphQL e construção de fluxos frontend-backend",
      "Otimização de fluxos críticos da jornada do usuário e evolução da performance em produção",
      "Colaboração em decisões técnicas relacionadas à arquitetura da aplicação",
    ],
    results: [
      "Plataforma em produção com usuários ativos",
      "Evolução contínua da experiência do usuário e performance",
    ],
  },

  {
    company: "Kazap Tecnologias",
    role: "Software Engineer",
    period: "Set/2020 – Jun/2024",
    description:
      "Desenvolvimento de produtos digitais web e mobile, atuando no desenvolvimento frontend e mobile e colaborando com integrações backend, evoluindo de nível júnior para pleno ao longo do período.",
    highlights: [
      "Desenvolvimento frontend com React e Next.js",
      "Desenvolvimento mobile com React Native e Expo",
      "Criação de interfaces com foco em performance e experiência do usuário",
      "Implementação de componentes reutilizáveis e padrões de UI",
      "Colaboração com times de produto, design e backend em soluções integradas",
    ],
    results: [
      "Evolução de responsabilidades técnicas ao longo da carreira",
      "Entrega contínua de funcionalidades utilizadas por usuários em produção",
      "Melhoria da qualidade e padronização do código frontend",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary-brand text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Experiência
          </h2>
        </motion.div>

        <div className="space-y-16">
          {jobs.map((job, i) => (
            <ExperienceItem key={job.company} {...job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
