import { Navbar } from "./_components/navbar";
import { Hero } from "./_components/hero";
import { TwoCards } from "./_components/two-cards";
import { Services } from "./_components/services";
import { WhyUs } from "./_components/why-us";
import { Timeline } from "./_components/timeline";
import { LogoStrip } from "./_components/logo-strip";
import { ContactSection } from "./_components/contact-section";
import { TabsWrapper } from "./_components/tabs-wrapper";
import { SiteFooter } from "./_components/site-footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TwoCards />
        <Services />
        <WhyUs />
        <Timeline />
        <LogoStrip />
        <ContactSection />
        <TabsWrapper />
      </main>
      <SiteFooter />
    </>
  );
}
