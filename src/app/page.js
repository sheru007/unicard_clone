'use client'

import BenefitSection from "@/components/BenefitSection";
import DownloadSection from "@/components/DownloadSection";
import FeatureSectionOne from "@/components/FeatureSectionOne";
import FeatureSectionTwo from "@/components/FeatureSectionTwo";
import FirstLoad from "@/components/FirstLoad";
import FloatingApplyNowBtn from "@/components/FloatingApplyNowBtn";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import NoticeSection from "@/components/NoticeSection";
import PartnerWithSection from "@/components/PartnerWithSection";
import Image from "next/image";
import useElementOnScreen from "@/hooks/useElementOnScreen";




export default function Home() {

  const [ containerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold:1.0
  })

  
  return (
    <main className="">
        <Header />
        <FirstLoad containerRef={containerRef} />
        <BenefitSection />
        <FeatureSectionOne />
        <FeatureSectionTwo />

        <PartnerWithSection />
        <NoticeSection />
        <DownloadSection />
        <FooterSection />
        <FloatingApplyNowBtn isVisible={isVisible} />
    </main>
  );
}
