import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SectionDivider from "@/components/SectionDivider";
import { DoodleIcon } from "@/components/DoodleIcons";
import { menu } from "@/lib/menu-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Cheesecakes, celebration cakes, breads, croissants, desserts and coffee — the full Glen's Bakehouse menu, baked fresh daily in Bengaluru.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="baked fresh, priced fair"
        title="The Menu"
        lead="Everything below is made in-house from scratch. Whole cakes and large orders are happily taken a day ahead."
      />

      {/* Category quick-nav */}
      <nav className="flex flex-wrap justify-center gap-3 mb-16">
        {menu.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="sketch-btn bg-paper px-5 py-2 font-hand text-xl text-ink"
          >
            {category.title}
          </a>
        ))}
      </nav>

      <div className="space-y-20">
        {menu.map((category, index) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <div className="flex flex-col items-center text-center gap-2 mb-8">
              <DoodleIcon
                name={category.icon}
                className={`w-14 h-14 text-ink ${
                  index % 2 === 0 ? "-rotate-3" : "rotate-3"
                }`}
              />
              <h2 className="font-display font-bold text-3xl sm:text-4xl">
                {category.title}
              </h2>
              <p className="font-hand text-2xl text-ink-soft -rotate-1">
                {category.blurb}
              </p>
            </div>

            <ul className="mx-auto max-w-3xl space-y-6">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl shrink-0">
                      {item.name}
                      {item.signature && (
                        <span className="ml-2 inline-block font-hand text-base text-paper bg-ink px-2 py-0.5 rounded-sm -rotate-2 align-middle">
                          house favourite
                        </span>
                      )}
                    </h3>
                    <span
                      className="flex-1 border-b-2 border-dotted border-ink/30 translate-y-[-4px]"
                      aria-hidden="true"
                    />
                    <span className="font-hand text-2xl text-ink shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft mt-1 max-w-xl">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            {index < menu.length - 1 && (
              <div className="pt-16">
                <SectionDivider />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-20 text-center sketch-border-alt bg-paper-warm p-8 sm:p-10">
        <p className="font-hand text-3xl text-ink -rotate-1">
          planning a celebration?
        </p>
        <p className="text-ink-soft mt-3 max-w-lg mx-auto">
          Custom cakes, dessert tables and bulk orders are our happy place.
          Call us at{" "}
          <a href={site.phoneHref} className="text-ink underline">
            {site.phone}
          </a>{" "}
          or drop by — we&rsquo;ll sketch something up together.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 sketch-btn bg-ink text-paper px-7 py-3 font-hand text-2xl"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
