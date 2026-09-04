import { Hero } from "@/components/Hero";
import { HeroFlameDivider } from "@/components/HeroFlameDivider";
import { About } from "@/components/About";
import { SobreDivider } from "@/components/SobreDivider";
import { Showcase } from "@/components/Showcase";
import { Location } from "@/components/Location";
import { FloralDivider } from "@/components/FloralDivider";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <HeroFlameDivider />
      <About />
      <SobreDivider />
      <Showcase />
      <Location />
      <FloralDivider />
      <SiteFooter />
    </main>
  );
}
