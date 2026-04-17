import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for FreezeDryGuide.com",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-xs text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span>Terms of Service</span>
      </nav>

      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
      <p className="text-xs text-muted-foreground mb-8">Last updated: April 17, 2026</p>

      <div className="space-y-6 text-sm text-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Use of This Site</h2>
          <p className="text-muted-foreground">
            FreezeDryGuide.com provides information for general educational purposes. Content on
            this site — including product reviews, comparisons, and guides — reflects research
            and community data available at the time of publication. Prices, specifications,
            and availability change frequently; always verify current information with the retailer
            before purchasing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Accuracy of Information</h2>
          <p className="text-muted-foreground">
            We make reasonable efforts to ensure information is accurate and up to date. However,
            we make no warranties about completeness, accuracy, or suitability of the information
            for any particular purpose. Product prices, specs, and availability are placeholders
            subject to change.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Affiliate Links</h2>
          <p className="text-muted-foreground">
            This site contains affiliate links. When you click these links and make qualifying
            purchases, we may earn a commission. This is disclosed on all applicable pages and does
            not affect the price you pay. See our{" "}
            <Link href="/about#affiliate-disclosure" className="text-primary hover:underline">
              full affiliate disclosure
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            FreezeDryGuide.com and its operators are not liable for any damages arising from the use
            of information on this site, including purchasing decisions made based on our reviews.
            All purchasing decisions are the sole responsibility of the buyer.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground">
            Content on this site is owned by FreezeDryGuide.com unless otherwise noted. Do not
            reproduce content without permission. Linking to our pages is welcome.
          </p>
        </section>
      </div>
    </div>
  );
}
