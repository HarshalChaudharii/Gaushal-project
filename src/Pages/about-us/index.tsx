import AboutUsComponent from "@/components/AboutUsComponent";
import BecomeMember from "@/components/BecomeMember";
// import AboutSection from "@/features/about/AboutSection";
import AboutUsHero from "@/features/about/AboutUsHero";
import AboutUs from "@/features/home/AboutUs";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutUsComponent />
      <BecomeMember />
    </div>
  );
};

export default AboutUsPage;
