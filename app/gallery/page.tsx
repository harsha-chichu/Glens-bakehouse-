import type { Metadata } from "next";
import DoodleFrame from "@/components/DoodleFrame";
import SectionHeading from "@/components/SectionHeading";
import { DoodleIcon, type DoodleIconName } from "@/components/DoodleIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A walk through Glen's Bakehouse — the hand-drawn wall art, the ovens, the counters and the bakes.",
};

/**
 * Until real photos are added (drop them into /public/images/gallery and
 * swap the tiles below), the gallery tours the wall mural itself using
 * cropped views of the artwork.
 */
const muralTiles: { position: string; zoom: string; caption: string }[] = [
  { position: "8% 40%", zoom: "260%", caption: "the wood-fired oven corner" },
  { position: "26% 65%", zoom: "300%", caption: "cakes getting their icing" },
  { position: "45% 55%", zoom: "280%", caption: "the pastry case, mid-morning" },
  { position: "68% 45%", zoom: "300%", caption: "regulars at the counter" },
  { position: "88% 60%", zoom: "280%", caption: "gingerbread season" },
  { position: "55% 20%", zoom: "300%", caption: "pans, whisks & hanging herbs" },
  { position: "15% 75%", zoom: "320%", caption: "flour by the sackful" },
  { position: "97% 85%", zoom: "300%", caption: "fresh bakes, drawn daily" },
];

const doodleNotes: { icon: DoodleIconName; note: string }[] = [
  { icon: "croissant", note: "day three: the croissants are ready" },
  { icon: "cheesecake", note: "cheesecake o'clock is all day" },
  { icon: "coffee", note: "refills of conversation" },
];

export default function GalleryPage() {
  // Interleave a hand-written note tile after every third mural crop
  const tiles: Array<
    | { kind: "mural"; data: (typeof muralTiles)[number] }
    | { kind: "note"; data: (typeof doodleNotes)[number] }
  > = [];
  let noteIndex = 0;
  muralTiles.forEach((tile, i) => {
    tiles.push({ kind: "mural", data: tile });
    if ((i + 1) % 3 === 0 && noteIndex < doodleNotes.length) {
      tiles.push({ kind: "note", data: doodleNotes[noteIndex++] });
    }
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="a wander around the walls"
        title="The Gallery"
        lead="Our whole bakery is drawn in ink on the walls. Here's a closer look at the mural — one scene at a time."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, i) =>
          tile.kind === "mural" ? (
            <DoodleFrame
              key={`mural-${tile.data.caption}`}
              alt={i % 2 === 1}
              tilt={i % 3 === 0 ? "-rotate-1" : i % 3 === 1 ? "rotate-1" : ""}
              className="overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div
                className="aspect-square m-3 mb-1"
                role="img"
                aria-label={`Wall mural detail: ${tile.data.caption}`}
                style={{
                  backgroundImage: "url(/images/doodle-wall.png)",
                  backgroundSize: tile.data.zoom,
                  backgroundPosition: tile.data.position,
                }}
              />
              <p className="font-hand text-xl text-ink-soft text-center pb-3 -rotate-1">
                {tile.data.caption}
              </p>
            </DoodleFrame>
          ) : (
            <DoodleFrame
              key={`note-${tile.data.note}`}
              alt={i % 2 === 0}
              tilt={i % 2 === 0 ? "rotate-1" : "-rotate-1"}
              className="p-8 flex flex-col items-center justify-center text-center gap-4 bg-paper-warm"
            >
              <DoodleIcon
                name={tile.data.icon}
                className="w-14 h-14 text-caramel"
              />
              <p className="font-hand text-3xl leading-tight text-ink">
                {tile.data.note}
              </p>
            </DoodleFrame>
          )
        )}
      </div>

      <div className="mt-16 text-center sketch-border bg-paper-warm p-8 max-w-2xl mx-auto">
        <p className="font-hand text-2xl text-ink -rotate-1">
          took a photo at the bakehouse?
        </p>
        <p className="text-ink-soft mt-2">
          Tag{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caramel underline"
          >
            @{site.instagram}
          </a>{" "}
          and we might frame it — on the internet, next to the drawings.
        </p>
      </div>
    </div>
  );
}
