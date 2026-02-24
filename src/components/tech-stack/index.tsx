"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Vite.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    techs: ["React Native", "Expo"],
  },
  {
    title: "Backend & Integração",
    techs: ["Node.js", "REST APIs", "GraphQL", "Frontend-Backend Integration"],
  },
  {
    title: "Arquitetura & Qualidade",
    techs: [
      "Micro-frontends",
      "Design Systems",
      "Performance Optimization",
      "Component Architecture",
    ],
  },
];

export function TechStack() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary-brand text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary-brand/30 transition-colors duration-300 glow-accent"
            >
              <h3 className="font-mono text-primary-brand text-sm font-semibold mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.techs.map((tech) => (
                  <li
                    key={tech}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-brand/50" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
