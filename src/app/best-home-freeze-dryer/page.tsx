import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArticleSchema, FAQSchema, ItemListSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { freezeDryers } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Best Home Freeze Dryers (2026): Every Harvest Right Model Compared",
  description:
    "Compare every Harvest Right home freeze dryer — small, medium, and large. Batch sizes, power requirements, real run times, and which model fits your family.",
};

const faqItems = [
  {
    question: "Is there any alternative to Harvest Right?",
    answer:
      "Not really for home use. Harvest Right effectively has a monopoly on the consumer freeze dryer market. Blue Alpine is emerging as a challenger with positive early reviews, but the company is new and lacks the long-term reliability data that Harvest Right has built over years. If you want proven, buy Harvest Right. If you're comfortable with some early-adopter risk, Blue Alpine is worth watching.",
  },
  {
    question: "Does Harvest Right offer financing?",
    answer:
      "Yes, Harvest Right offers financing options directly through their website. This makes the $2,695-$4,995 price range more accessible for many buyers. Check their current financing terms at harvestright.com — rates and terms change periodically.",
  },
  {
    question: "What is the real run time for a batch?",
    answer:
      "Plan for 24-36 hours per batch, not the 8-12 hours the marketing materials suggest. High-moisture foods like fruits and full meals run longer. Low-moisture foods like herbs and crackers run shorter. The variance is real — experienced owners track their batches and adjust expectations based on food type.",
  },
  {
    question: "Do I need a 20-amp circuit for the small or medium?",
    answer:
      "No. The small and medium Harvest Right models run on standard 15-amp household outlets. Only the large model requires a dedicated 20-amp circuit. If you're considering the large, plan your placement around outlet access before the machine arrives.",
  },
];

export default function BestHomeFreezeDryerPage() {
  return (
    <>
      <ArticleSchema
        title="Best Home Freeze Dryers (2026): Every Harvest Right Model Compared"
        description="Compare every Harvest Right home freeze dryer — small, medium, and large. Batch sizes, power requirements, real run times, and which model fits your family."
        url="https://www.FreezeDryGuide.com/best-home-freeze-dryer"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <FAQSchema questions={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <ItemListSchema
        name="Best Home Freeze Dryers 2026"
        items={freezeDryers.map((p, i) => ({
          name: p.name,
          url: `https://www.FreezeDryGuide.com/best-home-freeze-dryer#${p.slug}`,
          position: i + 1,
        }))}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Best Home Freeze Dryers", url: "https://www.FreezeDryGuide.com/best-home-freeze-dryer" },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <span>Best Home Freeze Dryers</span>
        </nav>

        {/* Header */}
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          Best Home Freeze Dryers (2026): Every Harvest Right Model Compared
        </h1>

        {/* Intro */}
        <div className="prose prose-sm max-w-none mb-10">
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Harvest Right effectively has a monopoly on home freeze dryers. No other manufacturer
            makes a comparable consumer product at this price range. That means the buying decision
            isn&apos;t which brand to choose — it&apos;s which Harvest Right model.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We break down the real differences between the small, medium, and large models.
            Batch size, power requirements, footprint, real run times (not the marketed ones), and
            price — so you can pick the right unit for your family size and goals.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The short answer: most families should buy the medium. Here&apos;s why — and when the
            small or large makes more sense.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
            Model Comparison at a Glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-foreground"></th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Small</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary bg-primary/5">
                    Medium <span className="text-xs font-normal text-muted-foreground">(Most Popular)</span>
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Large</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Price</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">$2,695</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">$3,495</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">$4,995</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Batch size</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">7-10 lbs</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">12-16 lbs</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">16-20 lbs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Trays</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">4</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">5</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">6</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Power</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">~1,000W</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">~1,500W</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">20A circuit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Best for</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">1-2 people</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">2-4 people</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">5+ people</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-10">
          {freezeDryers.map((product, index) => {
            const link = bestLink(product);
            return (
              <div key={product.slug} id={product.slug}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-5 border-b border-border bg-muted/20">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            #{index + 1}
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
                          <p className="text-xs text-muted-foreground">at Harvest Right</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        {/* Pros */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-2">
                            Pros
                          </p>
                          <ul className="space-y-1.5">
                            {product.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-sm text-foreground">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
                            Cons
                          </p>
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

                      {/* Specs */}
                      <div className="bg-muted/30 rounded-lg p-4 mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Specs
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {Object.entries(product.specs).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-xs text-muted-foreground">{key}</p>
                              <p className="text-sm font-medium text-foreground">{val}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Verdict */}
                      <div className="border-l-2 border-primary pl-4 mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          Our Verdict
                        </p>
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
            Common Questions
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
              href="/freeze-dryer-accessories"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              What accessories do you need before your first batch?
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/freeze-dryer-vs-dehydrator"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Freeze dryer vs dehydrator — which should you buy first?
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
