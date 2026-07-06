import type { Metadata } from "next";
import DoodleFrame from "@/components/DoodleFrame";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import { DoodleIcon } from "@/components/DoodleIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Glen's Bakehouse in Bengaluru — address, opening hours, phone and Instagram. Walk-ins always welcome.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="the kettle's already on"
        title="Visit Us"
        lead="No reservations, no fuss — just walk in. Here's everything you need to find us."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <DoodleFrame tilt="-rotate-1" className="p-7 flex gap-5 items-start">
          <DoodleIcon
            name="mappin"
            className="w-12 h-12 text-caramel shrink-0"
          />
          <div>
            <h2 className="font-display font-bold text-xl mb-2">Where</h2>
            {site.addressLines.map((line) => (
              <p key={line} className="text-ink-soft">
                {line}
              </p>
            ))}
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sketch-btn bg-ink text-paper px-5 py-2 font-hand text-xl"
            >
              Open in Google Maps
            </a>
          </div>
        </DoodleFrame>

        <DoodleFrame alt tilt="rotate-1" className="p-7 flex gap-5 items-start">
          <DoodleIcon name="clock" className="w-12 h-12 text-caramel shrink-0" />
          <div>
            <h2 className="font-display font-bold text-xl mb-2">When</h2>
            {site.hours.map(({ days, time }) => (
              <p key={days} className="text-ink-soft">
                {days}
                <br />
                <span className="text-ink font-medium">{time}</span>
              </p>
            ))}
            <p className="font-hand text-xl text-caramel mt-3 -rotate-1">
              croissants sell out by noon &mdash; you&rsquo;ve been warned
            </p>
          </div>
        </DoodleFrame>

        <DoodleFrame alt tilt="rotate-1" className="p-7 flex gap-5 items-start">
          <DoodleIcon name="phone" className="w-12 h-12 text-caramel shrink-0" />
          <div>
            <h2 className="font-display font-bold text-xl mb-2">Call or write</h2>
            <p className="text-ink-soft">
              Orders, custom cakes &amp; everything else:
            </p>
            <a
              href={site.phoneHref}
              className="block mt-2 text-ink font-medium hover:text-caramel transition-colors"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block mt-1 text-ink font-medium hover:text-caramel transition-colors"
            >
              {site.email}
            </a>
            <p className="text-sm text-ink-soft mt-3">
              Custom cake orders need 24 hours&rsquo; notice.
            </p>
          </div>
        </DoodleFrame>

        <DoodleFrame tilt="-rotate-1" className="p-7 flex gap-5 items-start">
          <DoodleIcon
            name="instagram"
            className="w-12 h-12 text-caramel shrink-0"
          />
          <div>
            <h2 className="font-display font-bold text-xl mb-2">Follow along</h2>
            <p className="text-ink-soft">
              Daily bakes, behind-the-counter chaos and the occasional
              time-lapse of icing going on a cake.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sketch-btn bg-paper px-5 py-2 font-hand text-xl text-ink"
            >
              @{site.instagram}
            </a>
          </div>
        </DoodleFrame>
      </div>

      <div className="pt-16">
        <SectionDivider icon="coffee" />
      </div>

      <div className="mt-16 text-center sketch-border-alt bg-paper-warm p-8 sm:p-12 max-w-3xl mx-auto">
        <p className="font-hand text-3xl sm:text-4xl text-ink -rotate-1">
          first visit? ask for the day&rsquo;s bake
        </p>
        <p className="text-ink-soft mt-4 max-w-xl mx-auto">
          There&rsquo;s always something that came out of the oven within the
          hour. Ask at the counter, grab a corner table, and don&rsquo;t forget
          to look at the walls — they&rsquo;re the whole story of this place,
          drawn by hand.
        </p>
      </div>
    </div>
  );
}
