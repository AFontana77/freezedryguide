// Centralized affiliate tag management for FreezeDryLab.com
// Swap ONE constant when affiliate accounts change

export const AMAZON_TAG = "freezedrylab-20"; // update when approved

export const AFFILIATE_PROGRAMS = {
  amazon: {
    tag: AMAZON_TAG,
    cookie: "24h",
    commission: "3-4%",
  },
  harvestRight: {
    url: "https://affiliates.harvestright.com",
    cookie: "45d",
    commission: "3-10%",
  },
  emergencyEssentials: {
    url: "https://www.beprepared.com/affiliates",
    cookie: "30d",
    commission: "8%",
  },
  foodSaver: {
    url: "https://www.foodsaver.com/affiliate",
    cookie: "30d",
    commission: "5%",
  },
} as const;

export type AffiliateSource = "amazon" | "harvestRight" | "emergencyEssentials" | "foodSaver" | "direct";

export interface Product {
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  amazonAsin?: string;
  directUrl?: string;
  affiliateSource: AffiliateSource;
  image: string;
  shortDescription: string;
  pros: string[];
  cons: string[];
  verdict: string;
  specs: Record<string, string>;
}

export function amazonLink(urlOrAsin: string): string {
  if (urlOrAsin.startsWith("http")) {
    const url = new URL(urlOrAsin);
    url.searchParams.set("tag", AMAZON_TAG);
    return url.toString();
  }
  return `https://www.amazon.com/dp/${urlOrAsin}?tag=${AMAZON_TAG}`;
}

export function bestLink(product: Product): { url: string; label: string; isDirect: boolean } {
  // Prefer direct affiliate (higher commission) over Amazon
  if (product.directUrl && product.affiliateSource !== "amazon") {
    return {
      url: product.directUrl,
      label: `Buy at ${product.brand}`,
      isDirect: true,
    };
  }
  if (product.amazonAsin) {
    return {
      url: amazonLink(product.amazonAsin),
      label: "Check Price on Amazon",
      isDirect: false,
    };
  }
  return {
    url: "#",
    label: "Check Availability",
    isDirect: false,
  };
}
