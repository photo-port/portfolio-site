"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-semibold tracking-tight">
          PORTFOLIO
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm text-zinc-500 dark:text-zinc-400">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden border-t border-zinc-200 dark:border-white/10 px-6 py-4 space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block hover:text-zinc-900 dark:hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
