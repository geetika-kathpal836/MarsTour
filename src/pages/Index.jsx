import { useState, useCallback } from "react";
import BootSequence from "../components/BootSequence";
import MissionNav from "../components/MissionNav";
import HeroSection from "../sections/HeroSection";
import WhyMarsSection from "../sections/WhyMarsSection";
import LaunchSection from "../sections/LaunchSection";
import DeepSpaceSection from "../sections/DeepSpaceSection";
import MarsEntrySection from "../sections/MarsEntrySection";
import ColonySection from "../sections/ColonySection";
import MissionControlModule from "../modules/MissionControlModule";
import SpacecraftModule from "../modules/SpacecraftModule";
import MarsFactsModule from "../modules/MarsFactsModule";
import ColonyPlanModule from "../modules/ColonyPlanModule";
const Index = () => {
  const [booted, setBooted] = useState(false);
  const [openModule, setOpenModule] = useState(null);
  const handleBootComplete = useCallback(() => setBooted(true), []);
  const openMod = mod => setOpenModule(mod);
  const closeMod = () => setOpenModule(null);
  return <div className="min-vh-100">
      {/* Boot sequence */}
      {!booted && <BootSequence onComplete={handleBootComplete} />}

      {/* Side navigation */}
      {booted && <MissionNav />}

      {/* Main scroll sections */}
      <main>
        <HeroSection />
        <WhyMarsSection onOpenMarsFacts={() => openMod("mars-facts")} />
        <LaunchSection onOpenMissionControl={() => openMod("mission-control")} />
        <DeepSpaceSection onOpenSpacecraft={() => openMod("spacecraft")} />
        <MarsEntrySection />
        <ColonySection onOpenColonyPlan={() => openMod("colony-plan")} />
      </main>

      {/* Full-screen overlay modules */}
      <MissionControlModule isOpen={openModule === "mission-control"} onClose={closeMod} />
      <SpacecraftModule isOpen={openModule === "spacecraft"} onClose={closeMod} />
      <MarsFactsModule isOpen={openModule === "mars-facts"} onClose={closeMod} />
      <ColonyPlanModule isOpen={openModule === "colony-plan"} onClose={closeMod} />
    </div>;
};
export default Index;