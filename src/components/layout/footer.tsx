import Link from "next/link";

const reviewLinks = [
  { name: "Best Home Freeze Dryers", href: "/best-home-freeze-dryer" },
  { name: "Freeze Dryer Accessories", href: "/freeze-dryer-accessories" },
  { name: "Freeze Dryer vs Dehydrator", href: "/freeze-dryer-vs-dehydrator" },
];

const learnLinks = [
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 text-primary-foreground"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
                  <path d="M12 8v-2M12 18v-2M8 12H6M18 12h-2" />
                </svg>
              </div>
              <span className="font-heading text-base font-bold">
                Freeze Dry Guide
              </span>
            </Link>
            <p className="mt-2 text-xs text-primary font-medium italic">
              Independent reviews and guides for home freeze drying
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Honest numbers on run times, electricity costs, and batch sizes.
              We cover what the manufacturer marketing leaves out.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Reviews
            </h3>
            <ul className="space-y-2">
              {reviewLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Learn
            </h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sister Site */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Sister Site
            </h3>
            <div className="rounded-lg border border-border bg-muted/40 p-3">
              <Link
                href="https://www.homesteadinggear.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline"
              >
                HomesteadingGear.com
              </Link>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Also visit HomesteadingGear.com for chicken coops, pressure
                canners, solar generators, and all your homestead equipment.
                Freeze Dry Guide is part of the HomesteadingGear family of sites.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Freeze Dry Guide. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
            FreezeDryGuide.com is reader-supported. When you buy through links on
            our site, we may earn an affiliate commission at no extra cost to
            you.{" "}
            <Link href="/about#affiliate-disclosure" className="underline">
              Affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
