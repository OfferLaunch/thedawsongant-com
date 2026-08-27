import { useEffect, useState } from "react";
import { cn, scrollToSection } from "@/lib/utils";

const navItems = [
  { label: "About", id: "about" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Track Record", id: "track-record" },
  { label: "Telehealth", id: "telehealth" },
  { label: "Aviation", id: "aviation" },
  { label: "Giving", id: "giving" },
  { label: "FAQ", id: "faq" },
];

export function SiteNav() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 py-3 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <button type="button" onClick={() => go("about")} className="text-sm font-bold text-primary">
          Dawson Gant
        </button>
        <div className="relative">
          <ul className="hidden items-center gap-1 rounded-[0.625rem] border border-border bg-background/95 p-1 shadow-sm backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-[0.8125rem] font-medium text-primary/75 transition-colors hover:bg-primary/5 hover:text-primary",
                    active === item.id && "bg-primary/8 text-primary",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="rounded-md border border-border bg-background/95 p-2.5 shadow-sm backdrop-blur-md md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-5 bg-primary" />
            <span className="my-1 block h-px w-5 bg-primary" />
            <span className="block h-px w-5 bg-primary" />
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-2 min-w-48 rounded-xl border border-border bg-background p-2 shadow-lg backdrop-blur-md md:hidden">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(item.id)}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm text-primary/80 hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
