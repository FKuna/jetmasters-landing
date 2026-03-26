"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      <IconSun className="size-5 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <IconMoon className="absolute size-5 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
