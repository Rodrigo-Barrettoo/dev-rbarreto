"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {currentYear} Rodrigo Barreto
        </p>

        <p className="font-mono text-xs text-muted-foreground">
          Desenvolvido com React, Next.js e TypeScript • foco em performance e
          arquitetura frontend
        </p>

        <div className="flex justify-center gap-6 text-xs font-mono text-muted-foreground">
          <Link
            href="https://github.com/Rodrigo-Barrettoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/rodrigo-barreto-gg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
