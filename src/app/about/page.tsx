import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema/json-ld";

export const metadata: Metadata = {
  title: "About Freeze Dry Lab",
  description:
    "Freeze Dry Lab is an independent review site for home freeze dryers. Part of the HomesteadingGear family of sites.",
};

export default function AboutPage() {
  return (
    <>
      <ArticleSchema
        title="About Freeze Dry Lab"
        description="Freeze Dry Lab is an independent review site for home freeze dryers. Part of the HomesteadingGear family of sites."
        url="https://www.freezedrylab.com/about"
        datePublished="2026-04-17"
        dateModified={new Date().toISOString().split("T")[0]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.freezedrylab.com" },
          { name: "About", url: "https://www.freezedrylab.com/about" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          {" / "}
          <span>About</span>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
          About Freeze Dry Lab
        </h1>

        <div className="space-y-6 text-base text-foreground leading-relaxed">
          <p className="text-muted-foreground">
            Freeze Dry Lab is an independent review and guide site for home freeze dryers.
            We focus on one category — home freeze drying — and try to be the most useful
            resource on the internet for people researching a Harvest Right or considering
            their first freeze dryer.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">What We Do</h2>

          <p className="text-muted-foreground">
            We research products, review community forum data, analyze owner reports, and
            publish practical guides. We don&apos;t have a commercial relationship with
            Harvest Right or any other freeze dryer manufacturer. Our content is based on
            what real owners report — not marketing materials.
          </p>

          <p className="text-muted-foreground">
            We compare the Harvest Right small, medium, and large models, cover the
            accessories you need before your first batch, and publish guides on run times,
            electricity costs, and which foods work best.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground">Part of the HomesteadingGear Family</h2>

          <p className="text-muted-foreground">
            Freeze Dry Lab is a sister site to{" "}
            <a
              href="https://www.homesteadinggear.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              HomesteadingGear.com
            </a>
            , which covers the full range of homestead equipment: chicken coops, solar
            generators, pressure canners, greenhouse kits, and more.
          </p>

          <p className="text-muted-foreground">
            Both sites are independently operated and not affiliated with any manufacturer.
            We link to HomesteadingGear.com because freeze drying is part of a larger
            homestead lifestyle, and the sites naturally complement each other.
          </p>

          <div id="affiliate-disclosure" className="bg-muted/40 border border-border rounded-xl p-5 mt-8">
            <h2 className="font-heading text-lg font-bold text-foreground mb-3">Affiliate Disclosure</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              FreezeDryLab.com participates in affiliate programs including the Amazon Associates
              program and the Harvest Right affiliate program. When you click a link on this site
              and make a purchase, we may earn a small commission at no additional cost to you.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              This commission is how we keep the site running. It does not influence our
              recommendations. We recommend products we believe are genuinely good, and we
              include honest cons in every review.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Harvest Right has not paid for placement or positive coverage on this site.
              Our reviews and comparisons are based on community research and owner reports,
              not manufacturer relationships.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              Have a question or found an error?{" "}
              <span className="text-foreground">
                We&apos;re a small independent site — we aim to keep our content accurate
                and up to date. If you spot a factual error or outdated price, we want to
                know.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
