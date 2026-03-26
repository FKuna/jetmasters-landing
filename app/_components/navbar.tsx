import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { label: "Týmové lety", href: "#" },
  { label: "Soukromé lety", href: "#" },
  { label: "Služby", href: "#" },
  { label: "Flotila", href: "#" },
  { label: "O nás", href: "#" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-16">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-heading text-xl font-bold tracking-tight">
            JetMasters
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="#contact">Kontakt</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
