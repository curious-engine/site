import { instrumentSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/**
 * Inline handwriting emphasis — Instrument Serif italic.
 * Drop inside any heading: <h1>building <Pen>what's next.</Pen></h1>
 */
export function Pen({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        instrumentSerif.className,
        "font-normal tracking-normal",
        className
      )}
    >
      {children}
    </span>
  );
}
