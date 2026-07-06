import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DoodleFrame from "@/components/DoodleFrame";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import { DoodleIcon, type DoodleIconName } from "@/components/DoodleIcons";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Glen's Bakehouse — a Bengaluru bakery where the walls are drawn by hand and everything is baked from scratch.",
};

const values: { icon: DoodleIconName; title: string; text: string }[] = [
  {
    icon: "heart",
    title: "Made with love",
    text: "Every recipe started in a home kitchen and still tastes like it. If we wouldn't serve it to family, it doesn't leave the counter.",
  },
  {
    icon: "wheat",
    title: "Honest ingredients",
    text: "Real butter, real chocolate, seasonal fruit, flour we trust. No premixes, no essence pretending to be vanilla.",
  },
  {
    icon: "whisk",
    title: "Small batches",
    text: "We bake in rounds through the day, not in bulk at dawn. Fresh means baked hours ago, not this week.",
  },
  {
    icon: "rollingpin",
    title: "Craft over speed",
    text: "Croissants take three days. Sourdough takes two. Good things are slow, and we're in no hurry.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="hello, we're glen's"
          title="Our Story"
          lead="A little bakehouse in Bengaluru where the ovens never quite cool down and the walls double as a sketchbook."
        />

        <div className="grid gap-10 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3 space-y-5 text-ink-soft leading-relaxed">
            <p>
              Glen&rsquo;s Bakehouse began the way most good bakeries do —
              with one oven, a handful of family recipes, and a neighbourhood
              that kept coming back for more. What started as trays of
              cheesecake for friends grew into a bakehouse with a queue at the
              counter and regulars who have &ldquo;their&rdquo; table.
            </p>
            <p>
              When we set up our first shop, we didn&rsquo;t want posters or
              paint swatches on the walls. So we asked an artist to draw us —
              literally. The result is the mural you&rsquo;ll find inside:
              bakers pulling loaves from a brick oven, cakes being piped,
              display cases crowded with pastries, and customers (that&rsquo;s
              you) making it all worthwhile. It&rsquo;s not decoration;
              it&rsquo;s a diary of an ordinary day at Glen&rsquo;s, drawn in
              ink.
            </p>
            <p>
              Years on, the promise hasn&rsquo;t changed: everything is baked
              in-house, from scratch, every day. The cheesecakes are still
              slow-baked. The croissants still take three days of folding and
              resting. And the walls still make first-time visitors stop at
              the door and stare.
            </p>
          </div>

          <DoodleFrame
            tilt="rotate-1"
            className="lg:col-span-2 overflow-hidden"
          >
            <div className="relative aspect-[3/4] m-3 overflow-hidden">
              <Image
                src="/images/doodle-wall.png"
                alt="Hand-drawn wall art inside Glen's Bakehouse"
                fill
                className="object-cover object-[70%_center]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="font-hand text-xl text-ink-soft text-center pb-4 -rotate-1">
              the wall that started the whole theme
            </p>
          </DoodleFrame>
        </div>
      </div>

      <div className="pt-20">
        <SectionDivider icon="rollingpin" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-20">
        <SectionHeading
          eyebrow="what we knead by"
          title="The Glen's Way"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <DoodleFrame
              key={value.title}
              alt={i % 2 === 1}
              tilt={i % 2 === 0 ? "-rotate-1" : "rotate-1"}
              className="p-7 flex gap-5 items-start"
            >
              <DoodleIcon
                name={value.icon}
                className="w-12 h-12 text-caramel shrink-0"
              />
              <div>
                <h3 className="font-display font-bold text-xl mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {value.text}
                </p>
              </div>
            </DoodleFrame>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-hand text-3xl text-caramel -rotate-1 mb-6">
            the best way to hear the rest is over coffee
          </p>
          <Link
            href="/contact"
            className="sketch-btn inline-block bg-ink text-paper px-8 py-3.5 font-hand text-2xl"
          >
            Come visit us
          </Link>
        </div>
      </div>
    </div>
  );
}
