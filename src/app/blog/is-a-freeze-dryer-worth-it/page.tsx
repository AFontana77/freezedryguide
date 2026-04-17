import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "Is a Home Freeze Dryer Actually Worth It? The Math for 4 Family Sizes",
  description:
    "Break-even analysis for one person, couples, families of 4, and 6+. Real cost per freeze-dried serving versus buying commercial. When the numbers work.",
};

const faqItems = [
  {
    question: "How many years does it take to break even on a freeze dryer?",
    answer:
      "For a family of 4 running 2 batches per week, a Harvest Right Medium typically breaks even in 2-3 years compared to buying equivalent commercial freeze-dried food. Single users may never break even on cost alone. The calculation changes if you factor in preservation of homegrown or bulk-purchased food.",
  },
  {
    question: "What is the cost per serving of freeze-dried food at home?",
    answer:
      "At 2 batches per week on a medium unit, the cost per serving of home freeze-dried food works out to roughly $0.50-1.50 depending on what you're preserving and your local electricity rate. Commercial freeze-dried entrees from Mountain House or similar brands run $3-8 per serving. The gap is where the economics work in your favor.",
  },
  {
    question: "Is a freeze dryer worth it for a single person?",
    answer:
      "Financially, usually not. A single person cannot process food fast enough to justify the machine cost before food spoils. The exception is if you're a serious prepper building a multi-year supply, or if you process large quantities of homegrown food. For most single people, a quality dehydrator is a better fit.",
  },
];

export default function IsFreezeDryerWorthItPage() {
  return (
    <>
      <ArticleSchema
        title="Is a Home Freeze Dryer Actually Worth It? The Math for 4 Family Sizes"
        description="Break-even analysis for one person, couples, families of 4, and 6+. Real cost per freeze-dried serving versus buying commercial. When the numbers work."
        url="https://www.freezedrylab.com/blog/is-a-freeze-dryer-worth-it"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <FAQSchema questions={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.freezedrylab.com" },
          { name: "Blog", url: "https://www.freezedrylab.com/blog" },
          { name: "Is a Freeze Dryer Worth It?", url: "https://www.freezedrylab.com/blog/is-a-freeze-dryer-worth-it" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          {" / "}
          <span>Is a Freeze Dryer Worth It?</span>
        </nav>

        <div className="mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Buyer Guides
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          Is a Home Freeze Dryer Actually Worth It? The Math for 4 Family Sizes
        </h1>

        <p className="text-muted-foreground text-sm mb-8">April 17, 2026 · Freeze Dry Lab</p>

        {/* Key Takeaways */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Key Takeaways</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Worth it for families of 3+ who run 3+ batches per month
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Home freeze-dried food costs $0.50-1.50/serving vs $3-8 commercial
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Non-financial value (harvest preservation, preparedness) matters too
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-base text-foreground leading-relaxed">

          <p>
            A Harvest Right Medium freeze dryer costs $3,495. Is it worth it? The answer
            depends entirely on your family size, how often you&apos;d actually use it, and
            whether you&apos;re comparing it to buying commercial freeze-dried food or to
            letting garden surpluses go to waste.
          </p>

          <p>
            Here&apos;s the math for four household types.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Basic Economics
          </h2>

          <p>
            Commercial freeze-dried food (Mountain House, Augason Farms, etc.) costs $3-8
            per serving. Home freeze-dried food, accounting for equipment cost amortized over
            5 years and electricity, runs roughly $0.50-1.50 per serving.
          </p>

          <p>
            The gap is real — but you have to actually run the machine consistently to realize
            it. A freeze dryer sitting in the garage for 6 months is a $3,500 paperweight.
          </p>

          {/* The 4 Family Sizes */}
          <div className="space-y-5 my-8">
            {[
              {
                label: "Single Person",
                verdict: "Probably not worth it",
                color: "border-red-200 bg-red-50",
                detail:
                  "One person can only consume and process so much food. You'd struggle to run 2 batches per month, which means the machine cost amortizes slowly. The exception: serious long-term preppers building a 1-year supply. For most single people, a good dehydrator is a better fit.",
              },
              {
                label: "Couple (2 people)",
                verdict: "Worth it at 3+ batches/month",
                color: "border-yellow-200 bg-yellow-50",
                detail:
                  "A couple that gardens, hunts, or buys in bulk can justify a freeze dryer. Run 3+ batches per month and the savings versus commercial freeze-dried food offset the machine cost in 3-4 years. Manageable — but the medium model is likely overkill. Consider the small.",
              },
              {
                label: "Family of 4",
                verdict: "Worth it — this is the sweet spot",
                color: "border-green-200 bg-green-50",
                detail:
                  "A family of four that runs 2+ batches per week breaks even in roughly 2-3 years. More importantly, the non-financial value is real: you can preserve your garden harvest, bulk meat purchases, and build a genuine food reserve. The Harvest Right Medium is the right model for this household size.",
              },
              {
                label: "Family of 6+",
                verdict: "Clearly worth it",
                color: "border-green-200 bg-green-50",
                detail:
                  "Large families consume enough preserved food to run the machine constantly. The per-serving savings add up fast, and the payback period drops to 1-2 years. This is also the household where the Harvest Right Large makes sense — the extra capacity reduces cost per pound.",
              },
            ].map((scenario) => (
              <div key={scenario.label} className={`rounded-xl border p-5 ${scenario.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-heading text-base font-bold text-foreground">{scenario.label}</p>
                  <p className="text-xs font-medium text-foreground">{scenario.verdict}</p>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{scenario.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Non-Financial Value
          </h2>

          <p>
            The math above assumes you&apos;re replacing commercial freeze-dried food you
            would have bought anyway. But the bigger value for many people is the ability
            to preserve food that would otherwise go to waste.
          </p>

          <p>
            A 20-pound garden zucchini harvest. A bulk chicken purchase at $1.50/lb from
            a local farm. Strawberries at peak season from a pick-your-own farm at $1/lb.
            These are situations where the freeze dryer saves money not by replacing commercial
            food — but by capturing value that would otherwise rot.
          </p>

          <p>
            Then there&apos;s preparedness. A family of four with a Harvest Right running
            2 batches per week will have a meaningful food reserve within months. That has
            value that doesn&apos;t show up in a simple cost comparison.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Verdict
          </h2>

          <p>
            A freeze dryer is worth it if you&apos;re processing at least 3 batches per
            month consistently, and if your family is large enough to both produce and consume
            preserved food at that rate. For families of 4+, it&apos;s a clear yes. For
            singles and couples, the economics are tighter and usage habits matter more.
          </p>

          {/* FAQ */}
          <h2 className="font-heading text-xl font-bold text-foreground mt-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="border border-border rounded-lg p-4">
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 p-5 bg-muted/40 rounded-xl border border-border">
            <p className="text-sm font-semibold text-foreground mb-3">Compare the models:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/best-home-freeze-dryer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Small vs Medium vs Large — which fits your family?
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/harvest-right-electricity-cost"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                What the electricity bill actually looks like
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
