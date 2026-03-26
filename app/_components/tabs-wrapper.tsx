import { TabsSection } from "./tabs-section";

export function TabsWrapper() {
  return (
    <section className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
          S námi se bát létat nemusíte
        </h2>
        <TabsSection />
      </div>
    </section>
  );
}
