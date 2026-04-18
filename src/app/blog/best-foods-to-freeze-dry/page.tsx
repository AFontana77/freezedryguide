import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "The 30 Best Foods to Freeze Dry (And 5 You Should Never Try)",
  description:
    "Fruits, vegetables, cooked meats, full meals, dairy, eggs, herbs, and candy — plus five foods that ruin a batch. A practical guide for new freeze dryer owners.",
  alternates: { canonical: "https://www.FreezeDryGuide.com/blog/best-foods-to-freeze-dry" },
};

const bestFoods = [
  { category: "Fruits", items: ["Strawberries", "Blueberries", "Peaches", "Apples", "Bananas", "Mangoes", "Raspberries"] },
  { category: "Vegetables", items: ["Sweet corn", "Peas", "Green beans", "Broccoli", "Spinach", "Bell peppers", "Zucchini"] },
  { category: "Proteins", items: ["Cooked chicken", "Lean ground beef", "Cooked shrimp", "Scrambled eggs"] },
  { category: "Full Meals", items: ["Soups and stews", "Chili", "Cooked rice and grains", "Pasta dishes (low-fat)"] },
  { category: "Dairy", items: ["Sour cream", "Cream cheese", "Yogurt", "Shredded cheese"] },
  { category: "Other", items: ["Fresh herbs", "Skittles and candy", "Ice cream", "Cooked beans"] },
];

const avoidFoods = [
  {
    food: "High-fat meats (bacon, sausage)",
    reason: "Fat doesn't sublimate and turns rancid quickly. The shelf life is far shorter than lean meats.",
  },
  {
    food: "Whole eggs in shell",
    reason: "Always crack and beat eggs first. Whole eggs can crack in the freezing phase and make a mess of your trays.",
  },
  {
    food: "Honey",
    reason: "Honey's unique water content and sugar composition make it nearly impossible to freeze dry properly. It stays tacky and sticky.",
  },
  {
    food: "Butter and pure fats",
    reason: "Same problem as fatty meats. Fat content doesn't respond to the freeze dry process and becomes rancid.",
  },
  {
    food: "Jam and jelly",
    reason: "Too much sugar and pectin. The result is a tacky, hard-to-rehydrate product that doesn't justify the batch time.",
  },
];

const faqItems = [
  {
    question: "Can you freeze dry raw meat?",
    answer:
      "Yes, but cooked meat produces better results and is safer. Raw meat can be freeze dried, but the texture after rehydration is better when meat is cooked first. Ground beef, chicken, and other lean meats work well cooked and crumbled.",
  },
  {
    question: "How do you plan a batch for maximum efficiency?",
    answer:
      "Mix food types strategically — high-moisture foods take longer, so batching similar moisture-level foods together leads to more even cycle times. Pre-freezing food in your regular freezer before loading the freeze dryer also reduces total batch time by 2-4 hours.",
  },
  {
    question: "Can you freeze dry meals in advance for camping or backpacking?",
    answer:
      "Absolutely — this is one of the best uses for a home freeze dryer. Cook your regular meals, freeze dry them, vacuum seal in mylar bags, and rehydrate on the trail with boiling water. The weight savings and nutrition retention beat commercial backpacking meals by a wide margin.",
  },
];

export default function BestFoodsToFreezeDryPage() {
  return (
    <>
      <ArticleSchema
        title="The 30 Best Foods to Freeze Dry (And 5 You Should Never Try)"
        description="Fruits, vegetables, cooked meats, full meals, dairy, eggs, herbs, and candy — plus five foods that ruin a batch. A practical guide for new freeze dryer owners."
        url="https://www.FreezeDryGuide.com/blog/best-foods-to-freeze-dry"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <FAQSchema questions={faqItems.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Blog", url: "https://www.FreezeDryGuide.com/blog" },
          { name: "Best Foods to Freeze Dry", url: "https://www.FreezeDryGuide.com/blog/best-foods-to-freeze-dry" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          {" / "}
          <span>Best Foods to Freeze Dry</span>
        </nav>

        <div className="mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Food Guides
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          The 30 Best Foods to Freeze Dry (And 5 You Should Never Try)
        </h1>

        <p className="text-muted-foreground text-sm mb-8">April 17, 2026 · Freeze Dry Guide</p>

        {/* Key Takeaways */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Key Takeaways</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Most fruits, vegetables, cooked meats, and full meals freeze dry excellently
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Avoid high-fat foods — they don&apos;t sublimate and go rancid fast
            </li>
            <li className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-primary font-bold mt-0.5">→</span>
              Pre-freeze your food before loading to cut batch time by 2-4 hours
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-base text-foreground leading-relaxed">

          <p>
            One of the first questions new freeze dryer owners ask: what should I actually
            freeze dry? The machine can handle a wide range of foods — but some produce
            dramatically better results than others. And a handful will ruin your batch
            or produce food that doesn&apos;t justify the run time.
          </p>

          <p>
            Here&apos;s the practical breakdown, built from years of community experience
            in the Harvest Right owner community.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            The 30 Best Foods to Freeze Dry
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            {bestFoods.map((group) => (
              <div key={group.category} className="bg-muted/30 rounded-xl p-4 border border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            5 Foods You Should Never Try to Freeze Dry
          </h2>

          <p>
            These aren&apos;t just difficult — they produce poor results, waste a batch slot,
            or create cleanup problems. Learn this list before your first run.
          </p>

          <div className="space-y-4 my-6">
            {avoidFoods.map((item) => (
              <div key={item.food} className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.food}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">
            Tips for Batch Planning
          </h2>

          <p>
            Batch efficiently by grouping similar moisture-content foods together. High-moisture
            fruits like strawberries and peaches need 32-38 hours. Lower-moisture vegetables
            like peas and corn run 24-28 hours. Mixing them means either the fruit is
            under-dried or you&apos;re running longer than needed on the vegetables.
          </p>

          <p>
            Pre-freeze your food in a regular freezer for 24 hours before loading the
            freeze dryer. This cuts the freeze phase of the cycle by 2-4 hours and
            reduces total electricity consumption per batch.
          </p>

          <p>
            Candy — specifically Skittles, Taffy, and other sugar candies — has become
            popular in the freeze dry community. The results are genuinely fun: the candy
            puffs up dramatically and the texture changes completely. Not a practical food
            storage item, but a crowd-pleaser for kids and a way to experiment without
            wasting a food batch slot.
          </p>

          {/* FAQ */}
          <h2 className="font-heading text-xl font-bold text-foreground mt-10">
            Food Questions Answered
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
            <p className="text-sm font-semibold text-foreground mb-3">Ready to buy?</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/best-home-freeze-dryer"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Compare all Harvest Right models
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/freeze-dryer-accessories"
                className="flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Get your storage supplies sorted first
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
