const LOGOS = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
  { name: "Partner 7" },
] as const;

export function LogoStrip() {
  return (
    <section className="bg-background px-6 py-16 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12">
        <p className="max-w-[560px] text-center text-lg font-bold leading-relaxed">
          Důvěra se buduje léty, ne slovy
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-14 w-[200px] items-center justify-center text-sm text-muted-foreground"
            >
              <div className="flex h-6 items-center gap-2">
                <div className="size-6 bg-muted" />
                <span className="font-heading text-sm font-medium text-foreground">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
