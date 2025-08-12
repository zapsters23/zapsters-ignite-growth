import { useEffect, useRef } from "react";

interface GradientSpotlightProps {
  className?: string;
}

const GradientSpotlight = ({ className = "" }: GradientSpotlightProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--brand-1) / 0.15), transparent 40%)",
        transition: "background 150ms ease",
      }}
    />
  );
};

export default GradientSpotlight;
