import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS_1 = [
  { label: "Týmové lety", href: "#" },
  { label: "Soukromé lety", href: "#" },
  { label: "Další služby", href: "#" },
] as const;

const FOOTER_LINKS_2 = [
  { label: "Flotila", href: "#" },
  { label: "O nás", href: "#" },
  { label: "Kontakt", href: "#contact" },
] as const;

const LEGAL_LINKS = [
  { label: "Ochrana soukromí", href: "#" },
  { label: "Podmínky používání", href: "#" },
  { label: "Nastavení cookies", href: "#" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-background px-6 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-32">
          <div className="flex w-full max-w-[500px] flex-col gap-6">
            <Link href="/" className="font-heading text-xl font-bold tracking-tight">
              JetMasters
            </Link>
            <p className="font-heading text-3xl font-bold leading-[1.2] lg:text-[56px] lg:leading-[1.2]">
              On Time. On Point.
              <br />
              In the Air.
            </p>
          </div>
          <div className="flex flex-1 gap-10">
            <nav className="flex flex-1 flex-col" aria-label="Services">
              {FOOTER_LINKS_1.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-1 flex-col" aria-label="Company">
              {FOOTER_LINKS_2.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-1 flex-col">
              <Link
                href="#"
                className="flex items-center gap-3 py-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <IconBrandLinkedin className="size-6" strokeWidth={1.5} />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Separator />
          <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
            <p>&copy; 2026 JetMasters. Všechna práva vyhrazena.</p>
            <nav className="flex flex-wrap gap-6" aria-label="Legal">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="underline transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
