/** Original gold line-art illustrations per category — placeholders until real photography arrives. */
export default function LampArt({ slug, className = '' }: { slug: string; className?: string }) {
  const stroke = '#C9A85D';
  const soft = 'rgba(201,168,93,0.35)';
  const common = {
    fill: 'none',
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-hidden="true">
      <ellipse cx="60" cy="60" rx="46" ry="46" fill="none" stroke={soft} strokeWidth="1" strokeDasharray="3 5" />
      {slug === 'chandeliers' && (
        <g {...common}>
          <line x1="60" y1="18" x2="60" y2="34" />
          <circle cx="60" cy="15" r="2.4" fill={stroke} stroke="none" />
          <path d="M38 44 Q60 56 82 44" />
          <path d="M44 58 Q60 70 76 58" />
          <path d="M50 72 Q60 80 70 72" />
          <line x1="38" y1="44" x2="38" y2="52" />
          <line x1="60" y1="49" x2="60" y2="57" />
          <line x1="82" y1="44" x2="82" y2="52" />
          <circle cx="38" cy="55" r="2.6" />
          <circle cx="60" cy="60" r="2.6" />
          <circle cx="82" cy="55" r="2.6" />
          <circle cx="50" cy="75" r="2.2" />
          <circle cx="70" cy="75" r="2.2" />
          <circle cx="60" cy="88" r="3" fill={stroke} stroke="none" opacity="0.85" />
        </g>
      )}
      {slug === 'wall-lamps' && (
        <g {...common}>
          <line x1="34" y1="14" x2="34" y2="106" stroke={soft} />
          <path d="M34 52 Q58 52 58 66 L58 74 Q44 74 34 66 Z" />
          <line x1="58" y1="74" x2="58" y2="82" />
          <circle cx="58" cy="87" r="4" fill={stroke} stroke="none" opacity="0.9" />
          <path d="M50 94 L44 102 M58 95 L58 104 M66 94 L72 102" opacity="0.7" />
        </g>
      )}
      {slug === 'spotlights' && (
        <g {...common}>
          <line x1="20" y1="26" x2="100" y2="26" stroke={soft} />
          <rect x="52" y="26" width="16" height="8" rx="2" />
          <path d="M56 34 L46 52 L74 52 L64 34" />
          <path d="M48 58 L40 92 M72 58 L80 92" opacity="0.55" />
          <ellipse cx="60" cy="94" rx="16" ry="4" fill={stroke} stroke="none" opacity="0.35" />
        </g>
      )}
      {slug === 'magnetic' && (
        <g {...common}>
          <line x1="18" y1="40" x2="102" y2="40" strokeWidth="3" />
          <rect x="32" y="40" width="10" height="14" rx="1.5" />
          <rect x="55" y="40" width="10" height="18" rx="1.5" />
          <rect x="78" y="40" width="10" height="12" rx="1.5" />
          <path d="M37 60 L33 84 M60 64 L60 88 M83 58 L87 82" opacity="0.55" />
          <circle cx="33" cy="87" r="2" fill={stroke} stroke="none" opacity="0.8" />
          <circle cx="60" cy="91" r="2" fill={stroke} stroke="none" opacity="0.8" />
          <circle cx="87" cy="85" r="2" fill={stroke} stroke="none" opacity="0.8" />
        </g>
      )}
      {slug === 'ceiling' && (
        <g {...common}>
          <line x1="24" y1="22" x2="96" y2="22" stroke={soft} />
          <path d="M42 22 Q42 48 60 48 Q78 48 78 22" />
          <circle cx="60" cy="52" r="4" fill={stroke} stroke="none" opacity="0.9" />
          <path d="M48 62 L42 92 M60 63 L60 94 M72 62 L78 92" opacity="0.55" />
          <ellipse cx="60" cy="96" rx="20" ry="4" fill={stroke} stroke="none" opacity="0.3" />
        </g>
      )}
      {slug === 'indoor' && (
        <g {...common}>
          <line x1="60" y1="12" x2="60" y2="42" />
          <path d="M44 42 L76 42 L68 68 L52 68 Z" />
          <circle cx="60" cy="76" r="5" fill={stroke} stroke="none" opacity="0.9" />
          <path d="M44 84 Q60 92 76 84" opacity="0.6" />
          <path d="M38 90 Q60 102 82 90" opacity="0.35" />
        </g>
      )}
      {slug === 'outdoor' && (
        <g {...common}>
          <line x1="24" y1="96" x2="96" y2="96" stroke={soft} />
          <rect x="53" y="48" width="14" height="48" rx="2" />
          <path d="M48 48 L72 48 L66 34 L54 34 Z" />
          <circle cx="60" cy="28" r="4" fill={stroke} stroke="none" opacity="0.9" />
          <path d="M40 30 Q60 18 80 30" opacity="0.5" />
          <path d="M34 40 Q60 24 86 40" opacity="0.3" />
        </g>
      )}
      {slug === 'led' && (
        <g {...common}>
          <path d="M20 60 Q32 44 44 60 T68 60 T92 60 T104 60" />
          <path d="M20 70 Q32 54 44 70 T68 70 T92 70 T104 70" opacity="0.45" />
          <circle cx="32" cy="52" r="2" fill={stroke} stroke="none" opacity="0.8" />
          <circle cx="56" cy="62" r="2" fill={stroke} stroke="none" opacity="0.8" />
          <circle cx="80" cy="52" r="2" fill={stroke} stroke="none" opacity="0.8" />
        </g>
      )}
      {!['chandeliers', 'wall-lamps', 'spotlights', 'magnetic', 'ceiling', 'indoor', 'outdoor', 'led'].includes(slug) && (
        <g {...common}>
          <circle cx="60" cy="52" r="10" fill={stroke} stroke="none" opacity="0.85" />
          <path d="M40 80 Q60 92 80 80 M34 88 Q60 104 86 88" opacity="0.5" />
        </g>
      )}
    </svg>
  );
}
