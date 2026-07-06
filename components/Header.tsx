"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b-2 border-dashed border-ink/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          className="text-ink hover:text-caramel transition-colors"
          onClick={() => setOpen(false)}
        >
          <Logo className="text-[1.7rem]" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`font-hand text-2xl transition-colors ${
                  active
                    ? "text-caramel squiggle-underline"
                    : "text-ink hover:text-caramel"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 text-ink"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* hand-drawn hamburger: three uneven strokes */}
          <span
            className={`block h-[2.5px] rounded-full bg-current transition-all ${
              open ? "w-7 translate-y-[7.5px] rotate-45" : "w-7 -rotate-2"
            }`}
          />
          <span
            className={`block h-[2.5px] rounded-full bg-current transition-all ${
              open ? "opacity-0" : "w-5 rotate-1"
            }`}
          />
          <span
            className={`block h-[2.5px] rounded-full bg-current transition-all ${
              open ? "w-7 -translate-y-[7.5px] -rotate-45" : "w-6 -rotate-1"
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t-2 border-dashed border-ink/20 bg-paper px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-hand text-3xl py-2 ${
                  active ? "text-caramel" : "text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
