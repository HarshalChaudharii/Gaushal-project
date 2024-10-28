import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banner1 from "@/assets/carousel/banner1.jpg";
import Banner2 from "@/assets/carousel/banner2.jpg";
import Banner3 from "@/assets/carousel/banner3.png";
import Banner4 from "@/assets/carousel/banner4.jpg";
import Banner5 from "@/assets/carousel/banner5.jpg";
import Banner6 from "@/assets/carousel/banner6.jpg";

const banners = [
  { id: 1, src: Banner1, alt: "Banner 1" },
  { id: 2, src: Banner2, alt: "Banner 2" },
  { id: 3, src: Banner3, alt: "Banner 3" },
  { id: 4, src: Banner4, alt: "Banner 4" },
  { id: 5, src: Banner5, alt: "Banner 5" },
  { id: 6, src: Banner6, alt: "Banner 6" },
];

const HeroSection = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=" w-screen h-screen overflow-y-hidden overflow-x-hidden"
    >
      <CarouselContent className="mt-20 md:mt-0 lg:w-screen h-52 brightness-50 lg:h-full ">
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="w-full  h-full">
            <img
              src={banner.src}
              alt={banner.alt}
              className="object-cover w-full h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroSection;
