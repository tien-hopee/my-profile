import type { Project, ProjectCategory } from "@/content/types";
import { buildCoverArt } from "./project-cover-art";

/** Category motifs — abstract marks in a 120×120 space, deliberately not UI mockups. */
function Motif({ category }: { category: ProjectCategory }) {
  const common = {
    fill: "none",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
  };

  if (category === "game") {
    // Isometric tiles — nods to 3D world building.
    return (
      <g {...common}>
        <path d="M60 34 L92 52 L60 70 L28 52 Z" />
        <path d="M60 52 L92 70 L60 88 L28 70 Z" opacity="0.6" />
        <path d="M60 70 L60 88" opacity="0.6" />
      </g>
    );
  }

  if (category === "mobile") {
    // Stacked device outlines.
    return (
      <g {...common}>
        <rect x="40" y="26" width="32" height="56" rx="6" />
        <rect x="50" y="38" width="32" height="56" rx="6" opacity="0.55" />
        <path d="M52 34 L60 34" />
      </g>
    );
  }

  if (category === "web") {
    // Browser frame plus a content grid.
    return (
      <g {...common}>
        <rect x="30" y="32" width="60" height="46" rx="5" />
        <path d="M30 44 L90 44" />
        <circle cx="38" cy="38" r="1.6" />
        <path d="M50 56 L80 56 M50 66 L70 66" opacity="0.6" />
      </g>
    );
  }

  // backend — layered stores.
  return (
    <g {...common}>
      <ellipse cx="60" cy="38" rx="24" ry="8" />
      <path d="M36 38 L36 58 A24 8 0 0 0 84 58 L84 38" />
      <path d="M36 48 A24 8 0 0 0 84 48" opacity="0.6" />
    </g>
  );
}

/**
 * Per-variant canvas. The viewBox aspect matches the rendered box so the artwork
 * is never stretched, and the motif is scaled/centred rather than cropped huge.
 */
const CANVAS = {
  thumb: { width: 120, height: 120, motifScale: 1 },
  wide: { width: 320, height: 100, motifScale: 0.72 },
} as const;

interface ProjectCoverProps {
  project: Project;
  /** Decorative-artwork description, supplied per locale. */
  fallbackAlt: string;
  /** Project name, used as alt text when a real image is present. */
  projectName: string;
  /**
   * Distinguishes the two placements of the same project's cover. Without it both
   * SVGs would emit the same gradient element id, which is invalid HTML and makes
   * url(#id) resolve to whichever element came first.
   */
  variant: "thumb" | "wide";
  className?: string;
}

/**
 * Project visual.
 *
 * Renders `project.imageSrc` when a real screenshot exists. Otherwise it draws
 * generated abstract artwork — an honest decorative placeholder rather than a
 * fabricated screenshot of client software, which would misrepresent the work.
 */
export function ProjectCover({
  project,
  fallbackAlt,
  projectName,
  variant,
  className = "",
}: ProjectCoverProps) {
  if (project.imageSrc) {
    return (
      // Plain img: dimensions are unknown ahead of time and the file may be any format.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.imageSrc}
        alt={projectName}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const art = buildCoverArt(project.id, project.category);
  const { width, height, motifScale } = CANVAS[variant];
  const gradientId = `cover-grad-${project.id}-${variant}`;
  const blobRadius = Math.min(width, height);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={fallbackAlt}
      className={`h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`hsl(${art.hueA} 68% 22%)`} />
          <stop offset="100%" stopColor={`hsl(${art.hueB} 60% 12%)`} />
        </linearGradient>
      </defs>

      <rect width={width} height={height} fill={`url(#${gradientId})`} />

      {art.blobs.map((blob, index) => (
        <circle
          key={index}
          cx={blob.cx * width}
          cy={blob.cy * height}
          r={blob.r * blobRadius * 0.5}
          fill={`hsl(${art.hueA + index * 14} 80% 62%)`}
          opacity={blob.opacity * 0.5}
        />
      ))}

      {/* Centre the 120×120 motif on the canvas, then scale and rotate in place. */}
      <g
        transform={`translate(${width / 2} ${height / 2}) scale(${motifScale}) rotate(${art.rotation}) translate(-60 -60)`}
        opacity="0.9"
      >
        <Motif category={art.motif} />
      </g>
    </svg>
  );
}
