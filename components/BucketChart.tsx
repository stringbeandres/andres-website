"use client";

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function donutSlice(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startAngle: number, endAngle: number
) {
  const o1 = polarToCartesian(cx, cy, outerR, startAngle);
  const o2 = polarToCartesian(cx, cy, outerR, endAngle);
  const i1 = polarToCartesian(cx, cy, innerR, endAngle);
  const i2 = polarToCartesian(cx, cy, innerR, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return [
    `M ${o1.x} ${o1.y}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${o2.x} ${o2.y}`,
    `L ${i1.x} ${i1.y}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${i2.x} ${i2.y}`,
    "Z",
  ].join(" ");
}

export default function BucketChart() {
  const cx = 120, cy = 120, outerR = 100, innerR = 62;
  const experimentsDeg = 0.05 * 360; // 18°

  const experimentsPath = donutSlice(cx, cy, outerR, innerR, 0, experimentsDeg);
  const corePath = donutSlice(cx, cy, outerR, innerR, experimentsDeg, 360);

  return (
    <div className="not-prose my-10 flex flex-col sm:flex-row items-center gap-10">
      <svg width="240" height="240" viewBox="0 0 240 240" className="shrink-0">
        {/* Core work — 95% */}
        <path d={corePath} fill="#E5E4E0" />
        {/* Experiments — 5% */}
        <path d={experimentsPath} fill="#1B2A4A" />
        {/* Center label */}
        <text x="120" y="114" textAnchor="middle" fontSize="13" fill="#888888" fontFamily="Inter, sans-serif">
          time
        </text>
        <text x="120" y="132" textAnchor="middle" fontSize="13" fill="#888888" fontFamily="Inter, sans-serif">
          allocation
        </text>
      </svg>

      {/* Legend */}
      <div className="space-y-4 text-sm font-sans">
        <div className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#1B2A4A" }} />
          <div>
            <p className="font-semibold text-[#111111]">5% — Experiments</p>
            <p className="text-[#888888]">Low-cost, high-upside bets. No mandate required.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#E5E4E0" }} />
          <div>
            <p className="font-semibold text-[#111111]">95% — Core work</p>
            <p className="text-[#888888]">High-stakes, planned, cross-functional execution.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
