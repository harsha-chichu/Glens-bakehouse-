import Link from "next/link";
import Logo from "./Logo";
import { DoodleIcon } from "./DoodleIcons";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="flex flex-col items-center gap-3 mb-12 text-center">
          <Logo className="text-4xl sm:text-5xl" />
          <p className="font-hand text-2xl text-paper -rotate-1">
            {site.tagline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 text-sm leading-relaxed">
          <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
            <h3 className="font-hand text-2xl text-paper mb-1">Find us</h3>
            {site.addressLines.map((line) => (
              <p key={line} className="text-paper/80">
                {line}
              </p>
            ))}
            <a
              href={site.phoneHref}
              className="text-paper/80 hover:text-paper transition-colors"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-paper/80 hover:text-paper transition-colors"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="font-hand text-2xl text-paper mb-1">
              Oven hours
            </h3>
            {site.hours.map(({ days, time }) => (
              <p key={days} className="text-paper/80">
                {days}
                <br />
                <span className="text-paper">{time}</span>
              </p>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
            <h3 className="font-hand text-2xl text-paper mb-1">Wander</h3>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-paper/80 hover:text-paper transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-paper/80 hover:text-paper transition-colors"
            >
              <DoodleIcon name="instagram" className="w-5 h-5" />@
              {site.instagram}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-dashed border-paper/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-hand text-lg text-paper/70">
            our walls are drawn by hand — so is this website
          </p>
        </div>
      </div>
    </footer>
  );
}
