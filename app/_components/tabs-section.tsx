"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TabItem {
  title: string;
  description: string;
  image: string;
}

const TABS: TabItem[] = [
  {
    title: "Bezpečnost a spolehlivost na prvním místě",
    description:
      "Vaše bezpečí je pro nás prioritou. Spolupracujeme pouze s certifikovanými a prověřenými partnery.",
    image: "https://picsum.photos/seed/jetmaster4/600/600",
  },
  {
    title: "Kompletní servis bez starostí",
    description:
      "Postaráme se o vše od rezervace letadla po asistenci na letišti, abyste si mohli užít pohodlný let.",
    image: "https://picsum.photos/seed/jetmaster5/600/600",
  },
  {
    title: "Diskrétnost a důvěrnost",
    description: "Vaše soukromí a diskrétnost jsou pro nás samozřejmostí.",
    image: "https://picsum.photos/seed/jetmaster6/600/600",
  },
];

export function TabsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = TABS[activeIndex];

  return (
    <div className="flex flex-col items-center gap-20 lg:flex-row">
      <div className="relative aspect-square w-full flex-1">
        {activeTab !== undefined && (
          <Image
            src={activeTab.image}
            alt={activeTab.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-0">
        {TABS.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "flex flex-col gap-4 border-l-2 px-8 py-6 text-left transition-colors",
              index === activeIndex
                ? "border-foreground"
                : "border-transparent hover:border-muted-foreground/50"
            )}
          >
            <h3 className="font-heading text-xl font-bold leading-snug lg:text-[32px] lg:leading-[1.3]">
              {tab.title}
            </h3>
            <p className="text-base leading-relaxed">{tab.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
