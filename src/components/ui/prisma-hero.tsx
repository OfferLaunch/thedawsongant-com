import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/nav-items";
import { cn, scrollToSection } from "@/lib/utils";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap", className)} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

interface PrismaHeroProps {
  imageSrc?: string;
  imageAlt?: string;
}

const PrismaHero = ({
  imageSrc = "/dawson-gant-office-portrait.jpg",
  imageAlt = "Dawson Gant professional portrait in an office, wearing a dark suit and black shirt",
}: PrismaHeroProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const go = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <section className="h-screen w-full p-3 sm:p-4 md:p-5">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-x-0 top-0 h-[120%] w-full translate-y-0 object-cover object-[50%_20%]"
          fetchPriority="high"
        />

        <div className="noise-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2" aria-label="Hero navigation">
          <div className="relative flex items-center gap-2 rounded-b-2xl bg-background/95 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-4 md:gap-8 md:rounded-b-3xl md:px-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="hidden text-[10px] text-primary/75 transition-colors hover:text-primary sm:inline sm:text-xs md:text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={() => setMenuOpen((open) => !open)}
              className="text-[10px] font-medium text-primary/75 transition-colors hover:text-primary sm:hidden"
            >
              Menu
            </button>
            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="fixed inset-0 z-30"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute left-1/2 top-full z-40 mt-2 min-w-48 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-lg backdrop-blur-md sm:hidden">
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
              </>
            )}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Dawson Gant" showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2, color: "rgba(225, 224, 204, 0.7)" }}
              >
                Scottsdale operator and real estate investor. Over a hundred houses built and flipped since eighteen. Ventures taken to seven figures. Seven figures put back into the communities that raised him.
              </motion.p>

              <motion.button
                type="button"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollToSection("about")}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-primary-foreground transition-all hover:gap-3 sm:text-base"
              >
                The Full Story
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
