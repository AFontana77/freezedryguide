import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "I Bought a $3,000 Freeze Dryer, Here's What I Wish I Knew First",
  description:
    "Run times are 24-36 hours, not 8-12. Fatty foods are a problem. Pump oil needs changing. What first-year owners wish someone had told them.",
  alternates: { canonical: "https://www.FreezeDryGuide.com/blog/freeze-dryer-what-i-wish-i-knew" },
};

const faqItems = [
  {
    question: "How long does a freeze dryer batch actually take?",
    answer:
      "Plan for 24-36 hours per batch. High-moisture foods like fruit, full meals, and dairy take closer to 36-40 hours. Low-moisture foods like crackers, herbs, and pre-dehydrated items run 18-24 hours. The 8-12 hour figure in Harvest Right marketing is not achievable with typical food loads.",
  },
  {
    question: "Can a freeze dryer handle fatty foods?",
    answer:
      "Not well. High-fat foods like avocado, butter, peanut butter, and fatty cuts of meat don't freeze dry effectively. The fat doesn't sublimate out and becomes rancid much faster than the shelf life suggests. Stick to low-fat foods for long-term storage.",
  },
  {
    question: "How often do you change the pump oil?",
    answer:
      "With a standard oil pump, plan to change the oil every 20-25 batches, or whenever it turns dark and cloudy. An oil-free pump eliminates this maintenance step, worth the upgrade if you run the machine frequently.",
  },
];

export default function FreezeDryerWishIKnewPage() {
  return (
    <>
      <ArticleSchema
        title="I Bought a $3,000 Freeze Dryer, Here's What I Wish I Knew First"
        description="Run times are 24-36 hours, not 8-12. Fatty foods are a problem. Pump oil needs changing. What first-year owners wish someone had told them."
        url="https://www.FreezeDryGuide.com/blog/freeze-dryer-what-i-wish-i-knew"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <FAQSchema questions={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Blog", url: "https://www.FreezeDryGuide.com/blog" },
          { name: "What I Wish I Knew", url: "https://www.FreezeDryGuide.com/blog/freeze-dryer-what-i-wish-i-knew" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          {" / "}
          <span>What I Wish I Knew</span>
        </nav>

        <div className="mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Owner Reviews
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          I Bought a $3,000 Freeze Dryer, Here&apos;s What I Wish I Knew First
        </h1>

        <p className="text-muted-foreground text-sm mb-8">April 17, 2026 · Freeze Dry Guide</p>

        {/* Key Takeaways */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Key Takeaways</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Real run times are 24-36 hours, not the 8-12 hours in the marketing
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              High-fat foods won&apos;t freeze dry well, this rules out more than you&apos;d expect
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Buy your mylar bags and oxygen absorbers before the machine arrives
            </li>
          </ul>
        </div>

        <div className="prose-style space-y-6 text-base text-foreground leading-relaxed">

          <p>
            The Harvest Right website says a freeze dryer batch takes 8-12 hours. That&apos;s not
            a lie, exactly. It&apos;s just the best-case number under ideal conditions with
            low-moisture foods. What most people actually experience is 24-36 hours per batch —
            sometimes longer.
          </p>

          <p>
            That&apos;s the first thing I wish someone had told me before I spent $3,495 on
            a medium freeze dryer. It changes how you plan your batches, how often you can
            run the machine, and whether the economics work for your household.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Run Time Reality
          </h2>

          <p>
            A batch of strawberries, which are high in water content, will run 36-40 hours.
            A batch of cooked chicken and rice, a full meal, runs 32-38 hours. Crackers
            and dry snacks might finish in 18-22 hours. The machine doesn&apos;t lie to you;
            the marketing does.
          </p>

          <p>
            Plan your batches around 30 hours as a baseline. Load on a Friday night, and it&apos;ll
            be ready Saturday evening. That&apos;s realistic. Two batches per week is achievable.
            Four batches per week is a stretch unless you&apos;re running 24/7.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Fat Problem Nobody Warns You About
          </h2>

          <p>
            Fatty foods don&apos;t freeze dry. Avocado turns rancid. Butter won&apos;t work.
            Peanut butter is borderline. Fatty cuts of meat, bacon, heavily marbled steak —
            produce poor results because the fat doesn&apos;t sublimate the way water does.
          </p>

          <p>
            This matters more than it sounds. Many people buy a freeze dryer imagining they&apos;ll
            preserve full Thanksgiving meals, cheesy dishes, and everything else. You can preserve
            most of those things, but fat content has to be managed. Lean ground beef works great.
            Bacon does not. Learn this early.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Pump Oil You&apos;ll Forget to Change
          </h2>

          <p>
            If you bought the standard oil pump (not the upgraded oil-free option), you need
            to change the pump oil every 20-25 batches. It&apos;s not hard, takes about
            15 minutes. But it&apos;s easy to forget, and dark oil affects vacuum quality,
            which affects your batch results.
          </p>

          <p>
            The oil-free pump upgrade is worth it if you plan to run the machine frequently.
            No oil changes, less maintenance, one fewer thing to track. It costs more upfront
            but pays back in convenience.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            Order Your Storage Supplies Before the Machine Arrives
          </h2>

          <p>
            When your freeze dryer ships, order mylar bags and oxygen absorbers at the same
            time. You&apos;ll want to run your first batch right away, and you&apos;ll be
            annoyed if you have beautifully freeze-dried food sitting in the machine with no
            bags to put it in.
          </p>

          <p>
            The correct setup: 7-mil mylar bags (the pre-sized Harvest Right brand bags work
            well), 300cc oxygen absorbers for quart bags, and a heat sealer. Get these before
            day one.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The Electricity Bill Goes Up
          </h2>

          <p>
            Running 2 batches per week on a medium freeze dryer adds roughly $40-80 per month
            to your electricity bill depending on your local rate and how many hours each batch
            runs. At the US average of $0.12/kWh, a 40-kWh batch costs about $4.80. Two batches
            per week is around $40/month. Higher electricity rates, California, New York —
            push that toward $60-80.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            It&apos;s Loud. Plan the Location Carefully.
          </h2>

          <p>
            A Harvest Right running in your kitchen is about as loud as a window air conditioner.
            Not unbearable, but not quiet. If your kitchen is open to a living area where people
            are sleeping or watching TV, the noise will be noticeable at night.
          </p>

          <p>
            Many owners run theirs in a garage, basement, or utility room for this reason.
            It also generates heat, plan for ventilation if you&apos;re putting it in a
            small enclosed space.
          </p>

          {/* FAQ */}
          <h2 className="font-heading text-xl font-bold text-foreground mt-10">
            Quick Answers
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
            <p className="text-sm font-semibold text-foreground mb-3">
              Ready to compare models?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/best-home-freeze-dryer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Compare all Harvest Right freeze dryers
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/blog/harvest-right-electricity-cost"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Real electricity cost numbers from owners
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
