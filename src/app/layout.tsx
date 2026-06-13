import type { Metadata } from "next";
import { instrumentSans, fragmentMono } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Curious Engine — We Build What's Next",
  description:
    "Curious Engine is a holding company building products, platforms, and companies at the edge of what's possible.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("h-full antialiased", instrumentSans.variable, fragmentMono.variable)}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
