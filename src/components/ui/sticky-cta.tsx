"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface StickyCTAProps {
  productName: string;
  price: string;
  ctaUrl: string;
  ctaLabel: string;
  scrollThreshold?: number;
}

export function StickyCTA({
  productName,
  price,
  ctaUrl,
  ctaLabel,
  scrollThreshold = 400,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > scrollThreshold);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, scrollThreshold]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg">
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground">Our top pick</p>
          <p className="text-sm font-semibold text-foreground truncate">{productName}</p>
        </div>
        <p className="text-sm font-bold text-accent whitespace-nowrap hidden sm:block">{price}</p>
        <a
          href={ctaUrl}
          target="_blank"
          rel="nofollow noopener noreferrer sponsored"
          className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors whitespace-nowrap shrink-0"
        >
          {ctaLabel} <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={() => setIsDismissed(true)}
          className="rounded-full p-1.5 text-muted-foreground hover:bg-muted transition-colors shrink-0"
          aria-label="Dismiss recommendation bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
