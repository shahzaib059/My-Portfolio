import { site } from "@/data/site";

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}



