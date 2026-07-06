/**
 * Single place to edit Glen's Bakehouse contact & business details.
 * NOTE: address, phone and email are placeholders — update with the
 * bakery's real details before going live.
 */
export const site = {
  name: "Glen's Bakehouse",
  tagline: "Baked with love, drawn from the heart",
  addressLines: ["No. 24, 1st Main Road", "Cooke Town, Bengaluru 560005"],
  phone: "+91 98450 00000",
  phoneHref: "tel:+919845000000",
  email: "hello@glensbakehouse.in",
  instagram: "glens.bakehouse",
  instagramUrl: "https://www.instagram.com/glens.bakehouse/",
  mapsUrl: "https://maps.google.com/?q=Glen's+Bakehouse+Bengaluru",
  hours: [
    { days: "Monday – Friday", time: "8:00 am – 10:00 pm" },
    { days: "Saturday – Sunday", time: "8:00 am – 11:00 pm" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit Us" },
] as const;
