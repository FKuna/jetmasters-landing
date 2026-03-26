"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="flex w-full max-w-[560px] flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-base">
          Jméno
        </label>
        <Input id="name" name="name" className="h-12" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact" className="text-base">
          E-mail či telefon*
        </label>
        <Input id="contact" name="contact" className="h-12" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-base">
          Co potřebujete
        </label>
        <Textarea
          id="message"
          name="message"
          className="min-h-[180px] resize-y"
          placeholder="Sportovní charter? Soukromý let? Řešení pro vaši firmu? Umíme cokoliv."
        />
      </div>
      <div className="flex items-center gap-2 pb-4">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
        />
        <label htmlFor="terms" className="text-sm">
          Souhlasím s podmínkami
        </label>
      </div>
      <Button type="submit" className="w-fit" disabled={!agreed}>
        Poslat
      </Button>
    </form>
  );
}
