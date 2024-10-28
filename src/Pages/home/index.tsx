import AboutUs from "@/features/home/AboutUs";
import BecomeMember from "@/features/home/BecomeMember";
import Donation from "@/features/home/Donation";
import HeroSection from "@/features/home/HeroSection";
import LatestBlogs from "@/features/home/LatestBlogs";
import OurWork from "@/features/home/OurWork";
import { UpcomingEvents } from "@/features/home/UpcomingEvents";
import WhatWeDo from "@/features/home/WhatWeDo";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <Donation />
      <UpcomingEvents />
      <LatestBlogs />
      <OurWork />

      <BecomeMember />
    </div>
  );
};

export default HomePage;
