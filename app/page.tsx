import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import DoodleFrame from "@/components/DoodleFrame";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import { DoodleIcon, type DoodleIconName } from "@/components/DoodleIcons";
import { signatureBakes } from "@/lib/menu-data";
import { site } from "@/lib/site";

const specialties: { icon: DoodleIconName; label: string }[] = [
  { icon: "croissant", label: "Flaky Croissants" },
  { icon: "cheesecake", label: "Baked Cheesecakes" },
  { icon: "bread", label: "Sourdough Daily" },
  { icon: "cake", label: "Celebration Cakes" },
  { icon: "coffee", label: "Honest Coffee" },
  { icon: "cookie", label: "Cookies & More" },
];

const quotes = [
  {
    text: "The cheesecake here ruined every other cheesecake for me.",
    author: "a regular, probably on their third slice",
  },
  {
    text: "You come for the croissants, you stay because the walls are art.",
    author: "everyone who looks up from their plate",
  },
  {
    text: "My birthday cake made people forget it was my birthday.",
    author: "a happy customer, unbothered",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero: the doodle wall, exactly like in the bakery ─────────── */}
      <section className="relative overflow-hidden min-h-[92svh] flex items-center justify-center">
        <Image
          src="/images/doodle-wall.png"
          alt="Glen's Bakehouse hand-drawn wall art of bakers, ovens and pastry cases"
          fill
          priority
          className="object-cover mix-blend-multiply opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/55 to-paper" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-24">
          <p className="font-hand text-2xl sm:text-3xl text-ink -rotate-2 mb-4">
            est. Bengaluru &middot; fresh out of the oven daily
          </p>
          <h1 className="text-ink">
            <Logo className="text-6xl sm:text-8xl" />
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed">
            {site.tagline}. Handcrafted cheesecakes, breads and cakes from a
            little bakehouse where even the walls are drawn by hand.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="sketch-btn bg-ink text-paper px-8 py-3.5 font-hand text-2xl"
            >
              Explore the Menu
            </Link>
            <Link
              href="/contact"
              className="sketch-btn bg-paper/80 text-ink px-8 py-3.5 font-hand text-2xl"
            >
              Visit the Bakehouse
            </Link>
          </div>
        </div>
      </section>

      {/* ── Specialties strip ─────────────────────────────────────────── */}
      <section className="border-y-2 border-dashed border-ink/20 bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {specialties.map(({ icon, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-2 text-center ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <DoodleIcon name={icon} className="w-12 h-12 text-ink" />
              <span className="font-hand text-xl text-ink-soft">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Signature bakes ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20">
        <SectionHeading
          eyebrow="everybody's favourites"
          title="From Our Ovens"
          lead="The bakes people cross town for — baked in small batches, gone by evening."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureBakes.map((item, i) => (
            <DoodleFrame
              key={item.name}
              alt={i % 2 === 1}
              tilt={i % 2 === 0 ? "-rotate-1" : "rotate-1"}
              className="p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 transition-transform"
            >
              <DoodleIcon name={item.icon} className="w-14 h-14 text-ink" />
              <h3 className="font-display font-bold text-xl">{item.name}</h3>
              <p className="text-sm text-ink-soft leading-relaxed flex-1">
                {item.description}
              </p>
              <p className="font-hand text-2xl text-ink">{item.price}</p>
            </DoodleFrame>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="font-hand text-2xl text-ink squiggle-underline hover:text-ink-soft transition-colors"
          >
            see the whole menu →
          </Link>
        </div>
      </section>

      <div className="pt-20">
        <SectionDivider icon="whisk" />
      </div>

      {/* ── Story teaser ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <DoodleFrame tilt="-rotate-1" className="overflow-hidden">
            <div className="relative aspect-[4/3] m-3 sm:m-4 overflow-hidden">
              <Image
                src="/images/doodle-wall.png"
                alt="Detail of the hand-drawn bakery wall art"
                fill
                className="object-cover object-left"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </DoodleFrame>
          <div>
            <SectionHeading
              align="left"
              eyebrow="our story, in ink"
              title="Our Walls Tell Our Story"
              lead=""
            />
            <div className="space-y-4 text-ink-soft leading-relaxed -mt-6">
              <p>
                Step inside Glen&rsquo;s and look up: every inch of our walls
                is covered in hand-drawn scenes of bakers at the oven, cakes
                being iced and shelves stacked with bread. It&rsquo;s a
                portrait of exactly what happens here every single morning.
              </p>
              <p>
                We bake the way the walls are drawn — by hand, with patience,
                and with far too much attention to detail. No premixes, no
                shortcuts, no machines where hands do it better.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 sketch-btn bg-paper text-ink px-7 py-3 font-hand text-2xl"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <SectionDivider icon="heart" />
      </div>

      {/* ── Kind words ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20">
        <SectionHeading eyebrow="kind words" title="Crumbs of Praise" />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <DoodleFrame
              key={q.author}
              alt={i % 2 === 1}
              tilt={i === 1 ? "rotate-1" : "-rotate-1"}
              className="p-6 flex flex-col gap-4"
            >
              <p className="font-hand text-2xl leading-snug text-ink">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-sm text-ink-soft mt-auto">— {q.author}</p>
            </DoodleFrame>
          ))}
        </div>
      </section>

      {/* ── Visit band ────────────────────────────────────────────────── */}
      <section className="mt-20 bg-ink text-paper relative overflow-hidden">
        <Image
          src="/images/doodle-wall.png"
          alt=""
          aria-hidden
          fill
          className="object-cover opacity-10 invert"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 flex flex-col items-center text-center gap-5">
          <DoodleIcon name="mappin" className="w-12 h-12 text-paper" />
          <h2 className="font-display font-bold text-3xl sm:text-5xl">
            Come Say Hello
          </h2>
          <p className="text-paper/80 max-w-xl">
            {site.addressLines.join(", ")} &middot; open every day. The coffee
            is hot, the croissants vanish fast, and the walls are worth the
            visit alone.
          </p>
          <Link
            href="/contact"
            className="sketch-btn bg-paper text-ink px-8 py-3.5 font-hand text-2xl mt-2"
          >
            Plan your visit
          </Link>
        </div>
      </section>
    </>
  );
}
