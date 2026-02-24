"use client";

import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary-brand text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Educação
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">
              2017 – 2020
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Engenharia de Software
            </h3>
            <p className="text-sm text-muted-foreground mb-1">Bacharelado</p>
            <p className="text-sm text-primary-brand font-mono">
              Centro Universitário UNIFAE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">
              2020 – 2021
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Bootcamp GoStack
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              React.js, Node.js, React Native
            </p>
            <p className="text-sm text-primary-brand font-mono">Rocketseat</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
