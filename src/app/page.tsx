import Link from "next/link";
import { ArrowRight, Snowflake, Wrench, Scale, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema } from "@/components/schema/json-ld";

const categories = [
  {
    title: "Freeze Dryers",
    description:
      "Small vs Medium vs Large — batch sizes, power requirements, and which is right for your family size.",
    href: "/best-home-freeze-dryer",
    icon: Snowflake,
    badge: "Best Value",
  },
  {
    title: "Accessories",
    description:
      "What you need before your first batch: mylar bags, oxygen absorbers, and sealing tools.",
    href: "/freeze-dryer-accessories",
    icon: Wrench,
    badge: null,
  },
  {
    title: "vs. Dehydrator",
    description:
      "The full cost and shelf-life comparison — which you should buy first and why.",
    href: "/freeze-dryer-vs-dehydrator",
    icon: Scale,
    badge: "Most Asked",
  },
  {
    title: "Food Guides",
    description:
      "Which foods freeze dry best, which to avoid, and how to optimize batch runs.",
    href: "/blog",
    icon: BookOpen,
    badge: "New Guides",
  },
];

const featuredArticles = [
  {
    title: "I Bought a $3,000 Freeze Dryer — Here's What I Wish I Knew First",
    description:
      "Run times are 24-36 hours, not 8-12. Fatty foods are a problem. The pump oil needs changing. What owners learn the hard way.",
    href: "/blog/freeze-dryer-what-i-wish-i-knew",
    category: "Owner Reviews",
  },
  {
    title: "Is a Home Freeze Dryer Actually Worth It? The Math for 4 Family Sizes",
    description:
      "Break-even analysis for one person, couples, families of 4, and families of 6+. Real cost per serving versus buying commercial.",
    href: "/blog/is-a-freeze-dryer-worth-it",
    category: "Buyer Guides",
  },
  {
    title: "How Much Electricity Does a Harvest Right Use? Real Numbers from Owners",
    description:
      "Small model: 30-40 kWh per batch. Medium: 35-50 kWh. What that adds up to per month at average US electricity rates.",
    href: "/blog/harvest-right-electricity-cost",
    category: "Running Costs",
  },
  {
    title: "The 30 Best Foods to Freeze Dry (And 5 You Should Never Try)",
    description:
      "Fruits, vegetables, cooked meats, full meals, dairy, eggs, herbs, candy — plus five foods that will ruin a batch.",
    href: "/blog/best-foods-to-freeze-dry",
    category: "Food Guides",
  },
];

export default function HomePage() {
  return (
    <>
      <ArticleSchema
        title="Freeze Dry Lab — Independent Reviews for Home Freeze Dryers"
        description="Honest reviews, buying guides, and owner tutorials for home freeze dryers. We compare every Harvest Right model, cover accessories, and explain what the manufacturers don't tell you."
        url="https://www.freezedrylab.com"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Independent Freeze Dryer Reviews
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              The Real Numbers on{" "}
              <span className="text-primary">Home Freeze Drying</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Run times. Electricity costs. Batch sizes. We cover what the
              manufacturer marketing leaves out — so you know exactly what
              you&apos;re buying.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/best-home-freeze-dryer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer w-full sm:w-auto"
                >
                  Compare Harvest Right Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/freeze-dryer-vs-dehydrator">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto"
                >
                  Freeze Dryer vs Dehydrator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            What We Cover
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Every review is based on real owner data, community research, and
            honest numbers — not manufacturer talking points.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.href} href={cat.href} className="group">
                <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-primary/30">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      {cat.badge && (
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                    <p className="mt-3 text-sm font-medium text-primary flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                From the Blog
              </h2>
              <p className="mt-1 text-muted-foreground">
                Real numbers. Real run times. Real owner experiences.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              All Articles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredArticles.map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-primary/30">
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground mt-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Why Trust Freeze Dry Lab?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-1">
                No Manufacturer Deals
              </p>
              <p className="text-muted-foreground">
                Harvest Right has not paid for placement on this site. Our
                reviews are based on community research, owner forums, and
                product testing.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Real Run Time Data
              </p>
              <p className="text-muted-foreground">
                We publish actual batch run times reported by owners — not the
                manufacturer&apos;s best-case estimates. Expect 24-36 hours,
                not 8-12.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                Sister Site: HomesteadingGear.com
              </p>
              <p className="text-muted-foreground">
                FreezeDryLab is part of the HomesteadingGear family. See our
                main site for chicken coops, pressure canners, solar generators,
                and more.{" "}
                <a
                  href="https://www.homesteadinggear.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit HomesteadingGear.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            <strong>Affiliate Disclosure:</strong> FreezeDryLab.com is
            reader-supported. When you buy through links on our site, we may
            earn an affiliate commission at no extra cost to you. This helps us
            keep the lights on and the reviews honest.{" "}
            <a href="/about#affiliate-disclosure" className="underline">
              Learn more
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
