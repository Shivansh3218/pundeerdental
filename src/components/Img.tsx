import { useState } from "react";

interface ImgProps {
  /** Unsplash photo id, e.g. "1616391182219-e080b4d1043a" */
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Load immediately (above the fold) instead of lazily */
  eager?: boolean;
  widths?: number[];
  quality?: number;
}

const cdn = (id: string, w: number, q: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

/**
 * Responsive, lazy Unsplash image with a graceful palette gradient fallback —
 * so a missing asset never shows a broken-image icon.
 */
export function Img({
  id,
  alt,
  className = "",
  sizes = "100vw",
  eager = false,
  widths = [640, 960, 1280, 1920],
  quality = 70,
}: ImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-teal via-teal-600 to-clay-400 ${className}`}
      />
    );
  }

  return (
    <img
      src={cdn(id, widths[widths.length - 1], quality)}
      srcSet={widths.map((w) => `${cdn(id, w, quality)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
