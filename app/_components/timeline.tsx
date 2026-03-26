import Link from "next/link";
import { IconMessageCircle, IconSearch, IconRocket, IconChevronRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import type { Icon } from "@tabler/icons-react";

interface TimelineStep {
  icon: Icon;
  title: string;
  description: string;
}

const STEPS: TimelineStep[] = [
  {
    icon: IconMessageCircle,
    title: "Prvně se domluvíme",
    description: "Řeknete nám, co potřebujete. Posloucháme pečlivě a ptáme se správných otázek.",
  },
  {
    icon: IconSearch,
    title: "Pak najdeme řešení",
    description: "Vybíráme letadla a termíny, které se vám hodí.",
  },
  {
    icon: IconRocket,
    title: "A letíte",
    description: "Zbytek řešíme my. Vy se soustředíte na to, proč letíte.",
  },
];

export function Timeline() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          <div className="flex flex-1 flex-col gap-8">
            <h2 className="font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
              Jak vše probíhá?
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="outline" asChild>
                <Link href="#contact">Poleťte s námi</Link>
              </Button>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Více o nás
                <IconChevronRight className="size-5" />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {STEPS.map((step, index) => (
              <div key={step.title} className="flex gap-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center bg-muted">
                    <step.icon className="size-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  {index < STEPS.length - 1 && (
                    <Separator orientation="vertical" className="h-24" />
                  )}
                </div>
                <div className="flex flex-col gap-4 pb-8">
                  <h3 className="font-heading text-lg font-bold leading-snug lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
