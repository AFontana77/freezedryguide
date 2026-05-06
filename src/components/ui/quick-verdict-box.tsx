import { Check } from "lucide-react";

type QuickVerdictBoxProps = {
  winnerName: string;
  winnerCategory: string;
  dreamOutcomeChain: string;
  proofPoint: string;
  affiliateUrl: string;
  ctaLabel?: string;
  riskReversal?: string;
};

export function QuickVerdictBox(props: QuickVerdictBoxProps) {
  return (
    <aside
      role="complementary"
      aria-label="Editor's pick verdict"
      className="my-6 rounded-2xl border-2 border-primary/20 bg-card p-6 md:p-8 shadow-md"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
        Editor&apos;s pick · Best {props.winnerCategory}
      </p>
      <h2 className="mb-4 text-2xl md:text-3xl font-bold leading-tight text-foreground">
        {props.winnerName}
      </h2>
      <p className="mb-6 text-base md:text-lg leading-relaxed text-foreground/90">
        {props.dreamOutcomeChain}
      </p>
      <p className="mb-6 flex items-center gap-2 text-sm font-medium text-foreground/80">
        <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
        {props.proofPoint}
      </p>
      <a
        href={props.affiliateUrl}
        rel="nofollow noopener noreferrer sponsored"
        target="_blank"
        className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base md:text-lg font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-[48px]"
      >
        {props.ctaLabel ?? "See today's price on Amazon"}
      </a>
      <p className="mt-3 text-center text-xs text-foreground/60">
        {props.riskReversal ?? "30-day Amazon returns. Prime shipping."}
      </p>
    </aside>
  );
}
