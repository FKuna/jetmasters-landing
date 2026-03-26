import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="flex min-h-[600px] flex-col lg:h-[900px] lg:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center px-6 py-16 lg:items-end lg:pl-16 lg:pr-20">
          <div className="flex w-full max-w-[560px] flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="font-heading text-4xl font-bold leading-[1.2] lg:text-[56px]">
                On Time. On Point.
                <br />
                In the Air.
              </h1>
              <p className="text-lg leading-relaxed text-foreground">
                Jsme specializovaný letecký broker pro sportovní chartery a soukromé lety.
                Zajišťujeme absolutní spolehlivost, flexibilitu a precizní logistiku i v
                časově kritických situacích.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Poleťte s námi</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">Více o nás</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px] flex-1">
          <Image
            src="https://picsum.photos/seed/jetmaster1/1200/900"
            alt="Private jet on runway"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
