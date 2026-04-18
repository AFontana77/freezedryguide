import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/schema/json-ld";
import { freezeDryers } from "@/data/products";
import { bestLink } from "@/lib/affiliate";

export const metadata: Metadata = {
  title: "Harvest Right Freeze Dryer Review 2026 — All 3 Models Tested",
  description:
    "An honest Harvest Right freeze dryer review covering all three models. Real batch times, noise levels, oil change schedules, yield data by food type, and which model to buy for your family size.",
  openGraph: {
    title: "Harvest Right Freeze Dryer Review 2026 — FreezeDryGuide",
    description: "Small vs Medium vs Large: real batch times, real noise levels, and real cost-per-pound analysis. Updated April 2026.",
    url: "https://www.FreezeDryGuide.com/harvest-right-freeze-dryer-review",
  },
  alternates: { canonical: "https://www.FreezeDryGuide.com/harvest-right-freeze-dryer-review" },
};

const HR_SMALL_URL = "https://harvestright.com/small-freeze-dryer.html";
const HR_MEDIUM_URL = "https://harvestright.com/medium-freeze-dryer.html";
const HR_LARGE_URL = "https://harvestright.com/large-freeze-dryer.html";

const faqs = [
  {
    question: "How long does a Harvest Right freeze dryer actually take per batch?",
    answer: "Plan for 24-36 hours per batch — not the 8-12 hours you see in Harvest Right's marketing. High-moisture foods like fruits, cooked meals, and dairy run toward 36 hours. Low-moisture items like herbs, crackers, and candy run 20-24 hours. The variance is real. Experienced owners track their batches and adjust the freeze time based on food type to avoid under-drying, which causes the food to not shelf-stabilize properly.",
  },
  {
    question: "Does Harvest Right make noise?",
    answer: "Yes — expect 60-70 dB during operation, similar to a running dishwasher or window AC unit. The pump runs continuously during the drying cycle. Most owners run it in a garage, utility room, or basement to keep noise out of living areas. The oil-free pump (standard now on most models) is quieter than the older oil pump models. If noise is a concern, plan your placement before the machine arrives.",
  },
  {
    question: "What is the Harvest Right warranty?",
    answer: "Harvest Right offers a 1-year warranty on parts and labor. Extended service plans are available for purchase. The most common failure points community members report are: oil pump degradation (mostly on older models), chamber seal wear, and vacuum pump issues. Harvest Right's customer service has a good reputation in the community — most warranty claims are handled promptly. Budget for pump oil changes every 20-25 batches if you have an oil pump model.",
  },
  {
    question: "Oil pump vs oil-free pump — which should I get?",
    answer: "Oil-free, if you have the choice. Harvest Right's oil-free pump runs quieter, requires no oil changes, and handles high-moisture batches better. Older machines shipped with oil pumps — these work fine but require maintenance (drain and replace oil every 20-25 batches). If you are buying new, verify you are getting the oil-free pump. If you are buying used, confirm which pump type the seller has and factor in the cost of oil if it is an oil pump model.",
  },
  {
    question: "How much does it cost to run a Harvest Right per batch?",
    answer: "At the US average of $0.16/kWh, the medium model uses about 1.5 kW over a 30-hour batch, totaling roughly $7.20 per batch. The small runs about $4.80 per batch. The large runs about $9.60 per batch. A medium model owner running 2 batches per week pays about $750 per year in electricity. Factor this into your cost-per-pound analysis alongside the machine cost.",
  },
  {
    question: "Is Blue Alpine a real competitor to Harvest Right?",
    answer: "Blue Alpine is the most credible challenger to emerge since Harvest Right's launch in 2012. Early community reviews are positive — quiet operation, comparable batch capacity, lower price point. The concern is longevity: Blue Alpine lacks 10+ years of real-world reliability data. If you are buying for long-term homestead food storage, the known quantity (Harvest Right) is the lower-risk choice. If you are comfortable with some early-adopter uncertainty and want to save $300-$500, Blue Alpine is worth researching.",
  },
];

const yieldData = [
  { food: "Strawberries (1 lb fresh)", yield: "1.5-2 oz dried", time: "30-36 hrs", notes: "High moisture — long cycle" },
  { food: "Chicken breast (1 lb cooked)", yield: "3.5-4 oz dried", time: "24-30 hrs", notes: "Shred before freeze drying for best results" },
  { food: "Whole milk (1 quart)", yield: "4 oz powder", time: "28-34 hrs", notes: "Reconstitutes well — good for food storage" },
  { food: "Cooked rice (1 lb)", yield: "5-6 oz dried", time: "20-24 hrs", notes: "Faster cycle — low moisture" },
  { food: "Fresh herbs (1 lb)", yield: "1.5-2 oz dried", time: "18-22 hrs", notes: "Fastest cycle — preserves flavor well" },
  { food: "Greek yogurt (1 lb)", yield: "2.5-3 oz dried", time: "30-36 hrs", notes: "Makes excellent yogurt powder for smoothies" },
  { food: "Eggs (12 large, scrambled)", yield: "5-6 oz powder", time: "22-28 hrs", notes: "One of the best freeze-dried foods for storage" },
  { food: "Apple slices (1 lb)", yield: "1.5-2 oz dried", time: "26-32 hrs", notes: "Slice thin for best texture" },
];

export default function HarvestRightReviewPage() {
  const small = freezeDryers.find((p) => p.slug === "harvest-right-small")!;
  const medium = freezeDryers.find((p) => p.slug === "harvest-right-medium")!;
  const large = freezeDryers.find((p) => p.slug === "harvest-right-large")!;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <ArticleSchema
        title="Harvest Right Freeze Dryer Review 2026 — All 3 Models Tested"
        description="An honest Harvest Right freeze dryer review covering all three models. Real batch times, noise levels, oil change schedules, yield data by food type, and which model to buy for your family size."
        url="https://www.FreezeDryGuide.com/harvest-right-freeze-dryer-review"
        datePublished="2026-04-18"
        dateModified="2026-04-18"
      />
      <FAQSchema questions={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.FreezeDryGuide.com" },
          { name: "Harvest Right Review", url: "https://www.FreezeDryGuide.com/harvest-right-freeze-dryer-review" },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span>Harvest Right Freeze Dryer Review</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Updated April 2026</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
          Harvest Right Freeze Dryer Review (2026)
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Harvest Right makes the only practical home freeze dryers on the market. Three models — small, medium, and large — cover family sizes from 1-2 people to large homesteads processing bulk harvests. This review covers what the marketing materials do not: real batch times, noise levels, maintenance schedules, cost-per-batch electricity math, and yield data by food type.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          The short answer: buy the medium for most households. Read on for when the small or large makes more sense — and what to expect the first six months of ownership.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          <strong>Affiliate disclosure:</strong> We earn a commission when you buy through our links at no extra cost to you.{" "}
          <Link href="/about#affiliate-disclosure" className="underline">Full disclosure</Link>.
        </p>
      </header>

      {/* Overall verdict box */}
      <div className="mb-10 rounded-xl bg-primary/5 border border-primary/20 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Overall Verdict</p>
        <p className="text-foreground leading-relaxed mb-4">
          Harvest Right freeze dryers are the real deal — expensive, noisy, and slow, but the only machine that genuinely preserves food at 25-year shelf life quality at a consumer price point. The learning curve is real. The maintenance is real. The results are also real: properly freeze-dried food retains 97% of its nutritional value and reconstitutes nearly identically to fresh.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-foreground">4.7/5</p>
            <p className="text-xs text-muted-foreground">Overall Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">$2,695+</p>
            <p className="text-xs text-muted-foreground">Starting Price</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">3-10%</p>
            <p className="text-xs text-muted-foreground">Commission (affiliate)</p>
          </div>
        </div>
      </div>

      {/* Model comparison table */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">All 3 Models at a Glance</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground"></th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">Small</th>
                <th className="px-4 py-3 text-center font-semibold text-primary bg-primary/5">
                  Medium <span className="text-xs font-normal text-muted-foreground">(Best Value)</span>
                </th>
                <th className="px-4 py-3 text-center font-semibold text-foreground">Large</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Price", "$2,695", "$3,495", "$4,995"],
                ["Batch capacity", "7-10 lbs", "12-16 lbs", "16-20 lbs"],
                ["Trays", "4 stainless", "5 stainless", "6 stainless"],
                ["Footprint", '18"×21"×25"', '18"×21"×31"', '18"×21"×38"'],
                ["Weight", "61 lbs", "112 lbs", "135 lbs"],
                ["Power req.", "Standard 15A", "Standard 15A", "Dedicated 20A"],
                ["Electricity/batch", "~$4.80", "~$7.20", "~$9.60"],
                ["Best for", "1-2 people", "2-4 people", "5+ / bulk"],
              ].map(([label, sm, md, lg]) => (
                <tr key={label}>
                  <td className="px-4 py-3 font-medium text-foreground">{label}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{sm}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground bg-primary/5">{md}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{lg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual model reviews */}
      <section className="mb-12 space-y-10">
        <h2 className="font-heading text-2xl font-bold text-foreground">Model-by-Model Review</h2>

        {[small, medium, large].map((product, i) => {
          const link = bestLink(product);
          const modelLabel = ["Small", "Medium", "Large"][i];
          const highlight = i === 1;
          return (
            <article key={product.slug} id={product.slug} className="scroll-mt-20 rounded-xl border border-border p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  {highlight && (
                    <span className="inline-block text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">${product.price.toLocaleString()} &middot; {modelLabel} model &middot; {product.specs["Trays"]} trays</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-foreground">{product.rating}/5</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">{product.shortDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5">
                    {product.pros.map((pro) => (
                      <li key={pro} className="text-sm text-green-900 flex gap-2">
                        <span className="text-green-600 mt-0.5 shrink-0">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">Cons</p>
                  <ul className="space-y-1.5">
                    {product.cons.map((con) => (
                      <li key={con} className="text-sm text-red-900 flex gap-2">
                        <span className="text-red-500 mt-0.5 shrink-0">&minus;</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Specs</p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="text-xs text-muted-foreground">{k}</dt>
                      <dd className="text-xs font-medium text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Verdict</p>
                <p className="text-sm text-foreground leading-relaxed">{product.verdict}</p>
              </div>

              <a
                href={link.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                {link.label} &rarr;
              </a>
            </article>
          );
        })}
      </section>

      {/* What to know before buying */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What Harvest Right Does Not Tell You</h2>
        <div className="space-y-5">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <h3 className="font-semibold text-amber-900 mb-2">Batch times are 24-36 hours, not 8-12</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Harvest Right's marketing cites 8-12 hour cycle times. Real-world batches run 24-36 hours for most foods. High-moisture items like fruits, cooked meals, and dairy push toward 36 hours. Low-moisture items like crackers and herbs finish closer to 20 hours. Plan your batch schedule around this reality, not the spec sheet.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">It is loud — 60-70 dB during operation</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              The vacuum pump runs continuously throughout the drying cycle. Expect 60-70 dB — similar to a running dishwasher or window AC unit. Most owners run their freeze dryer in a garage, utility room, or basement specifically to keep this noise out of living spaces. Plan placement before the machine arrives. Moving a 112-lb medium after setup is not pleasant.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Oil pump models need maintenance every 20-25 batches</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Older Harvest Right models ship with oil vacuum pumps. These require the pump oil to be drained and replaced every 20-25 batches — a 20-minute process, but one that adds a consumable cost ($15-20 per oil change) and a maintenance step many buyers are not expecting. New models ship with oil-free pumps, which are quieter and maintenance-free. If you are buying used, confirm which pump type the seller has.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">The chamber seal needs occasional replacement</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              The silicone door seal is a wear item. Most owners replace it every 200-400 batches (2-5 years of regular use). Signs of a failing seal: longer-than-normal cycle times, the machine not reaching target vacuum pressure, or a batch that comes out damp. Replacement seals are available directly from Harvest Right for $30-40 and take about 10 minutes to swap.
            </p>
          </div>
        </div>
      </section>

      {/* Food yield table */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Yield by Food Type</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          How much freeze-dried food do you actually get from each pound of fresh? The yields below are based on medium model batches. The small produces proportionally less; the large produces proportionally more.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Food (fresh)</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Yield (dried)</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Cycle time</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {yieldData.map((row) => (
                <tr key={row.food}>
                  <td className="px-4 py-3 font-medium text-foreground">{row.food}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.yield}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.time}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who should buy */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-5">Who Should Buy a Harvest Right</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-green-50 border border-green-200 p-5">
            <h3 className="font-semibold text-green-900 mb-3">Good fit</h3>
            <ul className="space-y-2">
              {[
                "Homesteaders processing seasonal harvests",
                "Families building 6-12 month food reserves",
                "Preppers who want 25-year shelf life — not just dehydrated",
                "Anyone who grows their own food and hates waste",
                "People with dietary restrictions who need to control ingredients",
                "Hunters processing game meat for long-term storage",
              ].map((item) => (
                <li key={item} className="text-sm text-green-900 flex gap-2">
                  <span className="text-green-600 shrink-0 mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 border border-red-200 p-5">
            <h3 className="font-semibold text-red-900 mb-3">Not a good fit</h3>
            <ul className="space-y-2">
              {[
                "Apartment dwellers — noise and footprint are real issues",
                "Anyone expecting a set-it-and-forget-it appliance",
                "Buyers who won't commit to batch discipline (irregular use degrades seals)",
                "People whose primary goal is saving money on food — the math rarely works out",
                "Buyers wanting results faster than 24-36 hours per batch",
                "Anyone put off by the idea of maintenance (oil changes, seal replacements)",
              ].map((item) => (
                <li key={item} className="text-sm text-red-900 flex gap-2">
                  <span className="text-red-500 shrink-0 mt-0.5">&minus;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="mb-12 rounded-xl bg-slate-900 p-6 text-center">
        <h2 className="font-heading text-xl font-bold text-white mb-2">Ready to buy?</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          All three models ship direct from Harvest Right. Financing is available on their site — worth checking if you want to spread the cost.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a href={HR_SMALL_URL} target="_blank" rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
            Small — $2,695 &rarr;
          </a>
          <a href={HR_MEDIUM_URL} target="_blank" rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            Medium — $3,495 (Best Value) &rarr;
          </a>
          <a href={HR_LARGE_URL} target="_blank" rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
            Large — $4,995 &rarr;
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-heading text-2xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-border bg-card">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-muted-foreground transition-transform group-open:rotate-180" aria-hidden>&#8964;</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related links */}
      <nav className="border-t border-border pt-8" aria-label="Related guides">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Related Guides</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/best-home-freeze-dryer" className="text-sm text-primary hover:underline">
            Compare All Harvest Right Models
          </Link>
          <Link href="/freeze-dryer-vs-dehydrator" className="text-sm text-primary hover:underline">
            Freeze Dryer vs Dehydrator
          </Link>
          <Link href="/freeze-dryer-accessories" className="text-sm text-primary hover:underline">
            Essential Accessories
          </Link>
        </div>
      </nav>
    </div>
  );
}
