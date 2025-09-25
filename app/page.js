import Features from "@/components/subComponents/Features";
import Hero from "@/components/subComponents/Hero";
import SeeInAction from "@/components/subComponents/SeeInAction";
import Testimonials from "@/components/subComponents/Testimonials";

export default function Home() {
  return (
    <div className="relative min-h-screen  overflow-hidden">
      <Hero />
      <SeeInAction />
      <Features />
      <Testimonials />
    </div>
  );
}
