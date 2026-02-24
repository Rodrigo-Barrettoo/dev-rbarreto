"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <p className="font-mono text-primary-brand text-sm mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Estou sempre aberto a novas oportunidades e conexões. Se você tem um
            projeto interessante ou quer trocar uma ideia, entre em contato.
          </p>
          <Button asChild>
            <a href="mailto:rodrigonarrettoo@gmail.com">Diga olá</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
