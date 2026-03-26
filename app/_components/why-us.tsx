import Image from "next/image";
import Link from "next/link";
import { IconWorld, IconClock24, IconShieldCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

import type { Icon } from "@tabler/icons-react";

interface Reason {
  icon: Icon;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: IconWorld,
    title: "Jsme specialisté, ne prodejci",
    description: "Rozumíme sportovním týmům a jejich potřebám hlouběji než ostatní.",
  },
  {
    icon: IconClock24,
    title: "Dostupnost bez limitů",
    description: "Dvacet čtyři hodin, sedm dní v týdnu, bez výmluv.",
  },
  {
    icon: IconShieldCheck,
    title: "Bezpečnost na prvním místě",
    description: "Certifikovaní operátoři a nejpřísnější standardy v průmyslu.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
          Proč létat s námi?
        </h2>
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="relative aspect-[600/640] w-full flex-1">
            <Image
              src="https://picsum.photos/seed/jetmaster3/600/640"
              alt="Private jet interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-8 py-2">
              {REASONS.map((reason) => (
                <div key={reason.title} className="flex gap-6">
                  <reason.icon className="size-12 shrink-0 text-foreground" strokeWidth={1.5} />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-xl font-bold leading-snug lg:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="text-base leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild className="w-fit">
              <Link href="#about">O nás</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
