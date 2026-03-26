import Image from "next/image";
import Link from "next/link";
import {
  IconPlane,
  IconBriefcase,
  IconFirstAidKit,
  IconHeadset,
} from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";

import type { Icon } from "@tabler/icons-react";

interface ServiceItem {
  icon: Icon;
  title: string;
  description: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: IconPlane,
    title: "Skupinové a eventové lety",
    description:
      "Řešení pro vaše sportovní turnaje, incentive programy, firemní akce a skupinové zájezdy.",
    href: "#",
  },
  {
    icon: IconBriefcase,
    title: "Korporátní řešení pro management",
    description: "Konference, turnaje, firemní akce. Jsme připraveni na vše.",
    href: "#",
  },
  {
    icon: IconFirstAidKit,
    title: "Ambulantní lety",
    description:
      "Nebojíme se logistických nároků, včetně zdravotních a speciálních převozů.",
    href: "#",
  },
  {
    icon: IconHeadset,
    title: "Handling & asistence",
    description: "Zajistíme koordinaci handlingu a asistence na letištích.",
    href: "#",
  },
];

export function Services() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
          Co vše umíme?
        </h2>
        <div className="flex flex-col items-start gap-20 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex flex-col gap-4">
                  <service.icon className="size-12 text-foreground" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-bold leading-snug lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-normal text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Zjistit více
                    <IconChevronRight className="size-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[600/640] w-full flex-1">
            <Image
              src="https://picsum.photos/seed/jetmaster2/600/640"
              alt="Charter flight service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
