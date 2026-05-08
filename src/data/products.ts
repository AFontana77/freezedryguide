import type { Product } from "@/lib/affiliate";

// =============================================================================
// FREEZE DRYERS
// =============================================================================

export const freezeDryers: Product[] = [
  {
    name: "Harvest Right Small Home Freeze Dryer",
    slug: "harvest-right-small",
    category: "freeze-dryers",
    brand: "Harvest Right",
    price: 2695,
    rating: 4.7,
    amazonAsin: "",
    directUrl: "https://harvestright.com/small-freeze-dryer.html",
    affiliateSource: "harvestRight",
    image: "/images/products/harvest-right-small.jpg",
    shortDescription:
      "The entry-level Harvest Right — 4 trays, 7-10 lbs per batch, and the smallest footprint of the lineup.",
    pros: [
      "Lowest entry cost at $2,695",
      "Smallest footprint (18\" W × 21\" D × 25\" H)",
      "110V — works on standard household outlet",
      "Best for 1-2 person homesteads or testing freeze drying",
    ],
    cons: [
      "4 trays limits batch throughput significantly",
      "7-10 lbs per batch — building a reserve takes longer",
      "Not cost-effective for large families processing bulk harvests",
    ],
    verdict:
      "The right choice if you are single, a couple, or new to freeze drying and want to test the process before committing to a larger unit. The smallest footprint makes it the only model that fits on most countertops, so you build the skill before spending $3,500 on the medium, so the larger investment that follows is one you actually know how to use.",
    specs: {
      "Batch capacity": "7-10 lbs fresh food",
      "Trays": "4 stainless steel",
      "Footprint": "18\" W × 21\" D × 25\" H",
      "Weight": "61 lbs",
      "Power": "110V / ~1,000W",
    },
  },
  {
    name: "Harvest Right Medium Home Freeze Dryer",
    slug: "harvest-right-medium",
    category: "freeze-dryers",
    brand: "Harvest Right",
    price: 3495,
    rating: 4.8,
    amazonAsin: "",
    directUrl: "https://harvestright.com/medium-freeze-dryer.html",
    affiliateSource: "harvestRight",
    image: "/images/products/harvest-right-medium.jpg",
    shortDescription:
      "The most popular Harvest Right model — 5 trays and 12-16 lbs per batch hit the sweet spot for most families.",
    pros: [
      "Best value for families of 2-4",
      "12-16 lbs per batch is 35% more than the small",
      "5 trays — enough for meaningful food storage runs",
      "Most common model in the Harvest Right community — best community knowledge",
    ],
    cons: [
      "$3,495 is a significant investment",
      "Requires more floor space than the small model",
      "Still 110V but draws ~1,500W — check your outlet",
    ],
    verdict:
      "The medium is the sweet spot for most families. It has enough capacity to build real food storage in a reasonable timeframe, the community knowledge base is deepest for this model, and the price-to-capacity ratio beats both the small and large, so your pantry holds 6 months of meals by end of year one, so your household is measurably more resilient than it was before.",
    specs: {
      "Batch capacity": "12-16 lbs fresh food",
      "Trays": "5 stainless steel",
      "Footprint": "18\" W × 21\" D × 31\" H",
      "Weight": "112 lbs",
      "Power": "110V / ~1,500W",
    },
  },
  {
    name: "Harvest Right Large Home Freeze Dryer",
    slug: "harvest-right-large",
    category: "freeze-dryers",
    brand: "Harvest Right",
    price: 4995,
    rating: 4.7,
    amazonAsin: "",
    directUrl: "https://harvestright.com/large-freeze-dryer.html",
    affiliateSource: "harvestRight",
    image: "/images/products/harvest-right-large.jpg",
    shortDescription:
      "The highest-throughput home model — 6 trays and 16-20 lbs per batch for large families and serious preppers.",
    pros: [
      "16-20 lbs per batch — maximum home throughput",
      "6 trays for more variety per batch",
      "Economy of scale on long preservation runs",
      "Best for families of 5+ or serious preparedness",
    ],
    cons: [
      "$4,995 is the largest investment",
      "Requires dedicated 20-amp circuit",
      "135 lbs — not easily relocated once positioned",
    ],
    verdict:
      "For large families, homesteaders processing bulk harvests, or serious preppers building substantial food reserves, the large is the only option. The per-pound preservation cost comes down with volume, so a full deer harvest or a 100-lb garden season becomes a full year of shelf-stable protein, so the freezer stays empty and the pantry fills with food that lasts a decade.",
    specs: {
      "Batch capacity": "16-20 lbs fresh food",
      "Trays": "6 stainless steel",
      "Footprint": "18\" W × 21\" D × 38\" H",
      "Weight": "135 lbs",
      "Power": "110V / 20A dedicated circuit",
    },
  },
];

// =============================================================================
// FREEZE DRYER ACCESSORIES
// =============================================================================

export const freezeDryerAccessories: Product[] = [
  {
    name: "Harvest Right Mylar Bags (250-count, 1-quart)",
    slug: "harvest-right-mylar-bags-250",
    category: "freeze-dryer-accessories",
    brand: "Harvest Right",
    price: 45,
    rating: 4.7,
    amazonAsin: "B07DGBRDVJ",
    directUrl: "",
    affiliateSource: "amazon",
    image: "/images/products/harvest-right-mylar-bags.jpg",
    shortDescription:
      "7-mil food-grade mylar bags pre-sized for Harvest Right trays — the correct thickness for 25-year storage.",
    pros: [
      "7 mil is the right thickness for long-term storage (thin 3-mil bags fail over years)",
      "Pre-sized to fit Harvest Right trays exactly",
      "250 bags covers many months of batching",
      "Food-safe and odor-proof",
    ],
    cons: [
      "Still need oxygen absorbers purchased separately",
      "Slightly less flexible than thinner mylar (harder to fold)",
    ],
    verdict:
      "Buy these before your freeze dryer arrives. The HR-branded bags are pre-sized and the right thickness. Do not try to save money with thin mylar. A bag that fails in 3 years takes your food storage down with it, so the $3,495 machine you bought to protect your pantry cannot do its job.",
    specs: {
      "Thickness": "7 mil food-grade",
      "Count": "250",
      "Size": "1 quart",
      "Compatible with": "All Harvest Right models",
    },
  },
  {
    name: "300cc Oxygen Absorbers (100-pack)",
    slug: "oxygen-absorbers-300cc-100pack",
    category: "freeze-dryer-accessories",
    brand: "Wallaby",
    price: 15,
    rating: 4.6,
    amazonAsin: "B08FMZKWBL",
    directUrl: "",
    affiliateSource: "amazon",
    image: "/images/products/oxygen-absorbers-300cc.jpg",
    shortDescription:
      "The 300cc size is correct for 1-quart mylar bags — use one per bag for 25+ year shelf life.",
    pros: [
      "300cc is the correct size for quart mylar bags",
      "100-pack covers months of batching at $0.15 per absorber",
      "Hermetically sealed until use — no degradation before opening",
      "Iron-based — safe for all foods",
    ],
    cons: [
      "Entire opened bag must be used within 15 minutes or remaining absorbers are wasted",
      "Requires planning your sealing workflow before opening the pack",
    ],
    verdict:
      "Required for any serious long-term storage. At 15 cents per absorber, these are the cheapest part of the system with the most impact on actual shelf life.",
    specs: {
      "Size": "300cc (correct for quart mylar)",
      "Count": "100 pack",
      "Shelf life achieved": "25+ years when properly sealed",
      "Type": "Iron powder activated",
    },
  },
  {
    name: "FoodSaver FM2000 Vacuum Sealer",
    slug: "foodsaver-fm2000",
    category: "freeze-dryer-accessories",
    brand: "FoodSaver",
    price: 80,
    rating: 4.5,
    amazonAsin: "B00Y3QDE8K",
    directUrl: "",
    affiliateSource: "amazon",
    image: "/images/products/foodsaver-fm2000.jpg",
    shortDescription:
      "A secondary sealing option for freeze-dried foods going into FoodSaver bags for pantry-access storage.",
    pros: [
      "Works with mylar and FoodSaver-style bags",
      "Compact and easy to store",
      "Dry mode for freeze-dried foods works well",
      "Good for shorter-term pantry access items (1-2 years)",
    ],
    cons: [
      "Mylar sealing requires heat sealer — this only works for FoodSaver-compatible bags",
      "Not for long-term mylar storage",
    ],
    verdict:
      "A useful secondary tool for freeze-dried foods you are cycling through week-to-week. For items going into long-term mylar storage, you need a separate heat sealer instead.",
    specs: {
      "Bag types": "FoodSaver + compatible bags",
      "Mode": "Includes dry mode for freeze-dried",
      "Power": "110V",
      "Dimensions": "20\" L × 4\" W × 3\" H",
    },
  },
];

// =============================================================================
// ALL PRODUCTS (combined)
// =============================================================================

export const allProducts: Product[] = [
  ...freezeDryers,
  ...freezeDryerAccessories,
];

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
