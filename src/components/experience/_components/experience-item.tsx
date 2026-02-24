"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  results: string[];
  index: number;
};

export function ExperienceItem({
  company,
  role,
  period,
  description,
  highlights,
  results,
  index,
}: ExperienceItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 border-l hover:border-primary-brand transition-colors duration-500"
    >
      <div className="absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-primary-brand" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{role}</h3>
          <p className="text-primary-brand font-mono text-sm mt-1">{company}</p>
        </div>
        <time className="font-mono text-xs text-muted-foreground md:mt-0 shrink-0">
          {period}
        </time>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {highlights.length > 0 && (
        <ul className="space-y-3 mb-6">
          {highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground group"
            >
              <ArrowRight className="w-4 h-4 text-primary-brand shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {results.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {results.map((result, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="font-mono whitespace-normal opacity-80"
            >
              {result}
            </Badge>
          ))}
        </div>
      )}
    </motion.article>
  );
}
