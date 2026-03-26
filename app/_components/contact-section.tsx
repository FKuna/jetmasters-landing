import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background px-6 py-16 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <h2 className="font-heading text-3xl font-bold leading-[1.2] lg:text-5xl">
            Poleťte s námi!
          </h2>
          <p className="text-lg leading-relaxed">
            Řekněte nám, co potřebujete. Odpovíme do několika hodin.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
