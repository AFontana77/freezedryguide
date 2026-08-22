import manifest from '@/data/amazon-images.json';

/**
 * Amazon product image, rendered from the link manifest.
 *
 * Compliance is enforced here rather than left to operational discipline:
 *  - no image bytes are stored or served from our origin; the manifest holds
 *    URLs only and this renders them with a plain <img>;
 *  - `next/image` is NOT used for Amazon URLs — it downloads, transforms and
 *    caches the source bytes, which the Operating Agreement forbids;
 *  - the agreement allows storing a link for 24 hours, so a manifest older than
 *    its TTL is treated as absent and nothing is rendered.
 *
 * Width and height come from the API so the image cannot shift layout.
 */

type ManifestImage = { url: string; width?: number | null; height?: number | null };
type ManifestItem = { title?: string; primary: ManifestImage; variants?: ManifestImage[] };
type Manifest = { fetched_at: string; ttl_hours: number; items: Record<string, ManifestItem> };

const data = manifest as unknown as Manifest;

function isFresh(): boolean {
  const fetched = Date.parse(data.fetched_at);
  if (Number.isNaN(fetched)) return false;
  return Date.now() - fetched < (data.ttl_hours ?? 24) * 3600 * 1000;
}

/** Extract a bare ASIN from a bare id or any Amazon URL. */
export function asinOf(urlOrAsin?: string | null): string | null {
  if (!urlOrAsin) return null;
  if (/^[A-Z0-9]{10}$/.test(urlOrAsin)) return urlOrAsin;
  const m = urlOrAsin.match(/\/dp\/([A-Z0-9]{10})/);
  return m ? m[1] : null;
}

export function getProductImage(asin?: string | null): ManifestItem | null {
  if (!asin || !isFresh()) return null;
  return data.items[asin] ?? null;
}

export function AmazonProductImage({
  asin,
  productName,
  className = '',
}: {
  asin?: string | null;
  productName: string;
  className?: string;
}) {
  const item = getProductImage(asin);
  if (!item?.primary?.url) return null;
  return (
    <img
      src={item.primary.url}
      alt={productName}
      width={item.primary.width ?? undefined}
      height={item.primary.height ?? undefined}
      loading="lazy"
      decoding="async"
      className={`max-h-full max-w-full object-contain ${className}`}
    />
  );
}
