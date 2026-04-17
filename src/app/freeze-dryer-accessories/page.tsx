import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { freezeDryerAccessories } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Best Freeze Dryer Accessories (2026): What to Buy Before Your First Batch",
  description:
    "The freeze dryer is just the machine. You need mylar bags, oxygen absorbers, and sealing tools before your first batch. Here's exactly what to buy.",
};

const faqItems = [
  {
    question: "What size oxygen absorbers for freeze-dried food?",
    answer:
      "Use 300cc absorbers for 1-quart mylar bags and 2000cc absorbers for gallon bags. Matching absorber size to bag size is important — undersized absorbers won't remove enough oxygen for long-term storage.",
  },
  {
    question: "How long does freeze-dried food last in mylar bags?",
    answer:
      "Properly sealed freeze-dried food in 7-mil mylar bags with oxygen absorbers lasts 25+ years. Thinner 3-mil bags and skipping oxygen absorbers reduce shelf life to 1-5 years. The bag quality and sealing process matter as much as the freeze drying itself.",
  },
  {
    question: "Do I need a heat sealer for mylar bags?",
    answer:
      "Yes, for long-term storage you need a heat sealer capable of sealing 7-mil mylar. A standard FoodSaver works for FoodSaver-style bags but cannot seal thick mylar. Many owners use a basic impulse heat sealer ($30-50) dedicated to mylar work.",
  },
  {
    question: "Can I reuse mylar bags?",
    answer:
      "Technically yes, but it's not recommended for long-term storage. The bag integrity diminishes after the first seal and cut. For short-term pantry rotation storage, reuse is fine. For 25-year storage, use a fresh bag every time.",
  },
];

export default function FreezeDryerAccessoriesPage() {
  return (
    <>
      <ArticleSchema
        title="Best Freeze Dryer Accessories (2026): What to Buy Before Your First Batch"
        description="The freeze dryer is just the machine. You need mylar bags, oxygen absorbers, and sealing tools before your first batch. Here's exactly what to buy."
        url="https://www.FreezeDryGuide.com/freeze-dryer-accessories"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <FAQSchema questions={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Freeze Dryer Accessories", url: "https://www.FreezeDryGuide.com/freeze-dryer-accessories" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <span>Freeze Dryer Accessories</span>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          Best Freeze Dryer Accessories (2026): What to Buy Before Your First Batch
        </h1>

        <div className="prose prose-sm max-w-none mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The freeze dryer is just the machine. It produces perfectly preserved food —
            but without the right bags and oxygen absorbers, that food won&apos;t last more
            than a few years. The storage system is as important as the freeze drying itself.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Order your mylar bags and oxygen absorbers before your freeze dryer arrives.
            You&apos;ll want them on hand for your first batch — don&apos;t let a $3,000 batch
            of food sit unsealed while you wait for shipping.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Here&apos;s exactly what you need and why.
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-8">
          {freezeDryerAccessories.map((product, index) => {
            const link = bestLink(product);
            return (
              <div key={product.slug} id={product.slug}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-5 border-b border-border bg-muted/20">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            Must-Have #{index + 1}
                          </span>
                          <h2 className="font-heading text-xl font-bold text-foreground mt-2">
                            {product.name}
                          </h2>
                          <p className="text-sm text-muted-foreground mt-1">
                            {product.shortDescription}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-2xl font-bold text-foreground">
                            ${product.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">on Amazon</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-2">Pros</p>
                          <ul className="space-y-1.5">
                            {product.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-sm text-foreground">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">Cons</p>
                          <ul className="space-y-1.5">
                            {product.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-sm text-foreground">
                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-4 mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Specs</p>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(product.specs).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-xs text-muted-foreground">{key}</p>
                              <p className="text-sm font-medium text-foreground">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-l-2 border-primary pl-4 mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Our Verdict</p>
                        <p className="text-sm text-foreground leading-relaxed">{product.verdict}</p>
                      </div>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Accessory Questions Answered
          </h2>
          <div className="space-y-5">
            {faqItems.map((faq) => (
              <div key={faq.question} className="border border-border rounded-lg p-5">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-links */}
        <div className="mt-10 p-5 bg-muted/40 rounded-xl border border-border">
          <p className="text-sm font-semibold text-foreground mb-3">Also read:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/best-home-freeze-dryer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Which Harvest Right model is right for your family?
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/blog/best-foods-to-freeze-dry"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              The 30 best foods to freeze dry
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
