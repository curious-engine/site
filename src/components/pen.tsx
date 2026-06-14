import { libreCaslonText } from "@/lib/fonts";
import { cn } from "@/lib/utils";

/**
 * Inline decorative accent — Libre Caslon Text italic.
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
        libreCaslonText.className,
        "italic tracking-normal",
        className
      )}
    >
      {children}
    </span>
  );
}
