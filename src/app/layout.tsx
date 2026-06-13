import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { instrumentSans } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curious Engine — We Build What's Next",
  description:
    "Curious Engine is a holding company building products, platforms, and companies at the edge of what's possible.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full antialiased", instrumentSans.variable, geistMono.variable)}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
