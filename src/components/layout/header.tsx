"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviewLinks = [
  { name: "Freeze Dryers", href: "/best-home-freeze-dryer" },
  { name: "Accessories", href: "/freeze-dryer-accessories" },
];

const navLinks = [
  { name: "Comparisons", href: "/freeze-dryer-vs-dehydrator" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Text Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
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
            <span className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              Freeze Dry Guide
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Reviews
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[180px]">
                  {reviewLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/best-home-freeze-dryer" className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
              >
                Compare Models
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 pb-2">
              Reviews
            </p>
            {reviewLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border my-2" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/best-home-freeze-dryer" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-3 cursor-pointer">
                Compare Models
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
