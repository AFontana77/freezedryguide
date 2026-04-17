import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for FreezeDryGuide.com",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-xs text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <span>Privacy Policy</span>
      </nav>

      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
      <p className="text-xs text-muted-foreground mb-8">Last updated: April 17, 2026</p>

      <div className="space-y-6 text-sm text-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Information We Collect</h2>
          <p className="text-muted-foreground">
            FreezeDryGuide.com does not collect personal information unless you voluntarily provide it
            (such as through a contact form or email signup). We use standard web analytics to understand
            traffic patterns — this data is aggregated and does not identify individual visitors.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Cookies</h2>
          <p className="text-muted-foreground">
            We use cookies for analytics purposes (Google Analytics) and affiliate link tracking.
            Affiliate cookies from Amazon Associates and Harvest Right affiliates may be set when
            you click outbound links. These cookies allow us to receive commission on qualified
            purchases at no additional cost to you.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Third-Party Links</h2>
          <p className="text-muted-foreground">
            This site contains links to Amazon, Harvest Right, and other third-party retailers.
            These sites have their own privacy policies. We are not responsible for their data
            practices.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Affiliate Program Participation</h2>
          <p className="text-muted-foreground">
            FreezeDryGuide.com participates in the Amazon Associates program and other affiliate programs.
            As an Amazon Associate, we earn from qualifying purchases. Affiliate relationships are
            disclosed on every applicable page.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">Contact</h2>
          <p className="text-muted-foreground">
            Questions about this privacy policy can be directed to the site owner via the{" "}
            <Link href="/about" className="text-primary hover:underline">About page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
