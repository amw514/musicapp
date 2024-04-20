import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
      <HeroSection/>
      <FeaturedSection/>
      <WhyUsSection/>
      <TestimonialCards/>
      <UpcomingWebinars/>
    </main>
  )}
