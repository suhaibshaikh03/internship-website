import HeroMain from "./components/HeroMain";
import HeroConstellation from "./components/HeroConstellation";
import HeroCTA from "./components/HeroCTA";
import BrandGrid from "./components/BrandGrid";
import TopPrograms from "./components/TopPrograms";
import EdversityTestimonials from "./components/EdversityTestimonials";
import IndustryStatsGrid from "./components/IndustryStatsGrid";
import LearnFromExperts from "./components/LearnFromExperts";
import WhyEdversity from "./components/WhyEdversity";
import LaunchCTA from "./components/LaunchCTA";

export default function Home() {
  return (
  <>
   <HeroConstellation/>
   <HeroCTA/>
   <BrandGrid/>
   <TopPrograms/>
   <EdversityTestimonials/>
   <IndustryStatsGrid/>
   <LearnFromExperts/>
   <WhyEdversity/>
   <HeroMain/>
   <LaunchCTA/>
  </>
  );
}
