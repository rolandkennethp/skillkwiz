"use client";

import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import Banner from "@/components/banner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <div className="bg-white">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
