import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Blog, Freeze Dryer Guides, Owner Tips, and Food Preservation",
  description:
    "Real numbers on freeze drying: run times, electricity costs, which foods to freeze dry, and owner experiences from the Harvest Right community.",
  alternates: { canonical: "https://www.FreezeDryGuide.com/blog" },
};

const articles = [
  {
    slug: "freeze-dryer-what-i-wish-i-knew",
    title: "I Bought a $3,000 Freeze Dryer, Here's What I Wish I Knew First",
    description:
      "Run times are 24-36 hours, not 8-12. Fatty foods are a problem. The pump oil needs changing. What owners learn the hard way, before you spend $3,000.",
    category: "Owner Reviews",
    date: "April 17, 2026",
  },
  {
    slug: "is-a-freeze-dryer-worth-it",
    title: "Is a Home Freeze Dryer Actually Worth It? The Math for 4 Family Sizes",
    description:
      "Break-even analysis for one person, couples, families of 4, and families of 6+. The real cost per serving and when the numbers work in your favor.",
    category: "Buyer Guides",
    date: "April 17, 2026",
  },
  {
    slug: "harvest-right-electricity-cost",
    title: "How Much Electricity Does a Harvest Right Use? Real Numbers from Owners",
    description:
      "Small model: 30-40 kWh per batch. Medium: 35-50 kWh. What that adds up to per month, based on forum reports from actual owners.",
    category: "Running Costs",
    date: "April 17, 2026",
  },
  {
    slug: "best-foods-to-freeze-dry",
    title: "The 30 Best Foods to Freeze Dry (And 5 You Should Never Try)",
    description:
      "Fruits, vegetables, meats, full meals, dairy, eggs, herbs, and candy, plus five foods that will ruin a batch or produce poor results.",
    category: "Food Guides",
    date: "April 17, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <ArticleSchema
        title="Freeze Dry Guide Blog, Guides, Owner Tips, and Food Preservation"
        description="Real numbers on freeze drying: run times, electricity costs, which foods to freeze dry, and owner experiences."
        url="https://www.FreezeDryGuide.com/blog"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Blog", url: "https://www.FreezeDryGuide.com/blog" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <span>Blog</span>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          Freeze Dryer Guides and Owner Tips
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Real numbers from real owners. Run times, electricity costs, food guides,
          and what the Harvest Right community has learned through experience.
        </p>

        <div className="grid gap-5">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <Card className="hover:shadow-md transition-all duration-200 hover:border-primary/30">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h2 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {article.description}
                  </p>
                  <p className="text-sm font-medium text-primary flex items-center gap-1">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
