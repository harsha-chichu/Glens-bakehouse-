import type { DoodleIconName } from "@/components/DoodleIcons";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: DoodleIconName;
  items: MenuItem[];
};

/**
 * Menu content — names, blurbs and prices are editable placeholders.
 * Tweak freely; prices are per slice/piece unless noted.
 */
export const menu: MenuCategory[] = [
  {
    id: "cheesecakes",
    title: "Cheesecakes",
    blurb: "Slow-baked, silky and shamelessly rich — the house favourite.",
    icon: "cheesecake",
    items: [
      {
        name: "Classic Baked Cheesecake",
        description: "Creamy vanilla-bean cheesecake on a buttery biscuit base.",
        price: "₹220",
        signature: true,
      },
      {
        name: "Blueberry Cheesecake",
        description: "Baked classic crowned with a glossy blueberry compote.",
        price: "₹250",
      },
      {
        name: "Salted Caramel Cheesecake",
        description: "Burnt-sugar caramel, a whisper of sea salt, no regrets.",
        price: "₹250",
      },
      {
        name: "Biscoff Cheesecake",
        description: "Spiced cookie butter swirled through every layer.",
        price: "₹270",
      },
    ],
  },
  {
    id: "cakes",
    title: "Cakes & Pastries",
    blurb: "Celebration cakes by the slice or made whole to order.",
    icon: "cake",
    items: [
      {
        name: "Red Velvet Cake",
        description: "Cocoa-kissed crimson sponge with cream-cheese frosting.",
        price: "₹180",
        signature: true,
      },
      {
        name: "Belgian Chocolate Truffle",
        description: "Dark, glossy and unapologetically indulgent.",
        price: "₹190",
      },
      {
        name: "Fresh Fruit Gateau",
        description: "Light vanilla sponge, chantilly cream, seasonal fruit.",
        price: "₹170",
      },
      {
        name: "Carrot Walnut Cake",
        description: "Warm-spiced, walnut-studded, cream-cheese crowned.",
        price: "₹160",
      },
      {
        name: "Celebration Cakes (per kg)",
        description: "Custom birthday & occasion cakes — order 24 hrs ahead.",
        price: "₹950+",
      },
    ],
  },
  {
    id: "breads",
    title: "Breads & Croissants",
    blurb: "Out of the oven every morning at eight, sharp-ish.",
    icon: "bread",
    items: [
      {
        name: "Butter Croissant",
        description: "Twenty-seven layers of laminated, flaky patience.",
        price: "₹120",
        signature: true,
      },
      {
        name: "Almond Croissant",
        description: "Twice-baked with frangipane and toasted almonds.",
        price: "₹160",
      },
      {
        name: "Country Sourdough",
        description: "Naturally leavened, crackly crust, 48-hour ferment.",
        price: "₹220",
      },
      {
        name: "Multigrain Loaf",
        description: "Seven grains and seeds, sliced for sensible toast.",
        price: "₹140",
      },
      {
        name: "Garlic Herb Focaccia",
        description: "Olive-oil rich, rosemary-scented, pillow soft.",
        price: "₹160",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    blurb: "Little indulgences for the second stomach.",
    icon: "cupcake",
    items: [
      {
        name: "Banoffee Pie",
        description: "Banana, toffee, cream — the holy trinity, chilled.",
        price: "₹180",
        signature: true,
      },
      {
        name: "Tiramisu Cup",
        description: "Espresso-soaked savoiardi under mascarpone clouds.",
        price: "₹190",
      },
      {
        name: "Chocolate Brownie",
        description: "Fudgy centre, crackled top, walnut optional.",
        price: "₹110",
      },
      {
        name: "Lemon Tart",
        description: "Sharp lemon curd in crisp sweet pastry.",
        price: "₹140",
      },
      {
        name: "Assorted Cookies (box of 6)",
        description: "Choc-chip, oatmeal & double-chocolate, baked daily.",
        price: "₹240",
      },
    ],
  },
  {
    id: "savouries",
    title: "Savouries",
    blurb: "Because one cannot live on cake alone. Allegedly.",
    icon: "pie",
    items: [
      {
        name: "Chicken Puff",
        description: "Peppery chicken in shatteringly crisp pastry.",
        price: "₹90",
      },
      {
        name: "Veg Quiche",
        description: "Roast vegetables and cheese in a shortcrust shell.",
        price: "₹150",
      },
      {
        name: "Grilled Sandwich",
        description: "On our own sourdough, with salted fries.",
        price: "₹210",
      },
      {
        name: "Mushroom Vol-au-vent",
        description: "Creamy garlic mushrooms in a puff pastry crown.",
        price: "₹130",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    blurb: "Brewed to keep the conversation going.",
    icon: "coffee",
    items: [
      {
        name: "Cappuccino",
        description: "Double-shot, velvety foam, cocoa dust.",
        price: "₹150",
      },
      {
        name: "Cold Brew",
        description: "Steeped 18 hours, smooth as anything.",
        price: "₹180",
      },
      {
        name: "Hot Chocolate",
        description: "Real Belgian chocolate, marshmallows on request.",
        price: "₹170",
      },
      {
        name: "Masala Chai",
        description: "Slow-simmered with ginger and cardamom.",
        price: "₹90",
      },
    ],
  },
];

/** Items flagged `signature` — used for the home-page featured section. */
export const signatureBakes = menu
  .flatMap((category) =>
    category.items
      .filter((item) => item.signature)
      .map((item) => ({ ...item, categoryId: category.id, icon: category.icon }))
  )
  .slice(0, 4);
