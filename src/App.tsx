import { PrismaHero } from "@/components/ui/prisma-hero";
import { SiteNav } from "@/components/SiteNav";
import { SiteSections } from "@/components/SiteSections";

export default function App() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <PrismaHero imageSrc="/dawson-gant-office-portrait.jpg" imageAlt="Dawson Gant professional portrait in an office, wearing a dark suit and black shirt" />
        <SiteSections />
      </main>
    </>
  );
}
