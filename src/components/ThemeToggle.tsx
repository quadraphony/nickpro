import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5" />
      ) : (
        <IconMoon className="h-5 w-5" />
      )}
    </button>
  );
}
