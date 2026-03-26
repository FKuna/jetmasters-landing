import Link from "next/link";
import { IconPlane, IconDiamond } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const CARDS = [
  {
    icon: IconPlane,
    title: "Sportovní chartery pro kluby",
    description: "Letadla, která jsou připravena, když potřebujete.",
    href: "#",
  },
  {
    icon: IconDiamond,
    title: "Soukromé lety bez kompromisů",
    description: "Váš čas, vaše podmínky, vaše diskrétnost.",
    href: "#",
  },
] as const;

export function TwoCards() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-20">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
            Dvě role, jeden partner
          </h2>
          <p className="text-lg leading-relaxed">
            Komplexní letecká řešení na míru.
            <br />
            Jeden proces. Dvě řešení.
          </p>
        </div>
        <div className="grid w-full gap-8 md:grid-cols-2">
          {CARDS.map((card) => (
            <Card key={card.title} className="flex flex-col justify-center p-10 lg:min-h-[392px]">
              <CardHeader className="px-0">
                <card.icon className="mb-4 size-12 text-foreground" strokeWidth={1.5} />
                <CardTitle className="font-heading text-2xl font-bold leading-[1.2] lg:text-[40px]">
                  {card.title}
                </CardTitle>
                <CardDescription className="mt-4 text-base">{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pt-4">
                <Button variant="outline" asChild>
                  <Link href={card.href}>Více informací</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
