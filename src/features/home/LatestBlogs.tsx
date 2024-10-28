import { Button } from "@/components/ui/button";
import blog1 from "@/assets/images/cultural.jpg";
import blog2 from "@/assets/images/yagya.jpg";
import blog3 from "@/assets/images/latest1.jfif";
import blog4 from "@/assets/images/banner2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    id: 1,
    src: blog1,
    alt: "Blog 1",
    title: "Gaushala",
    desc: "It saves our culture and future",
    location: "Nashik, Maharashtra",
    date: "12th August 2021",
  },
  {
    id: 2,
    src: blog2,
    alt: "Blog 2",
    title: "Yoga & Meditation",
    desc: "At our gaushala we are blessed with the presence of the mother cow and her progeny. We are committed to the welfare of the cows and their progeny.",
    location: "Nashik, Maharashtra",
    date: "12th August 2021",
  },
  {
    id: 3,
    src: blog3,
    alt: "Blog 3",
    title: "Gau Seva",
    desc: "We are committed to the welfare of the cows and their progeny. We are committed to the welfare of the cows and their progeny.",
    location: "Nashik, Maharashtra",
    date: "12th August 2021",
  },
  {
    id: 4,
    src: blog4,
    alt: "Blog 4",
    title: "Wealth of Gaushala in Nashik",
    desc: "In Vedic society the economy was based on The cow.",
    location: "Nashik, Maharashtra",
    date: "12th August 2021",
  },
];

const LatestBlogs = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center ">
      <h1 className="text-center mt-20 text-primary font-semibold">
        LATEST BLOGS
      </h1>
      <h2 className="md:w-[50%] font-semibold text-3xl text-center  ">
        See the Latest Blog Posts of Gaushala
      </h2>

      <div>
        <div className="hidden mt-8 max-w-6xl  gap-3 md:grid md:grid-cols-2 md:mx-6 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="w-full flex flex-col justify-between border-2"
            >
              <div className="w-full h-44">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full h-36  bg-opacity-50 p-2">
                <h1 className=" text-xl font-semibold">{image.title}</h1>
                <p className="text-sm text-justify py-2">{image.desc}</p>
              </div>
              <Button className="ml-3 text-white w-32 bg-primary mb-3 mt-6">
                Read More
              </Button>
            </div>
          ))}
        </div>

        <Carousel
          className="block md:hidden lg:hidden"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="w-80 ">
            {images.map((image) => (
              <CarouselItem
                key={image.id}
                className="w-full flex flex-col justify-between border-2"
              >
                <div className="w-full h-44">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover "
                  />
                </div>

                <div className="w-full h-36  bg-opacity-50 p-2">
                  <h1 className="mt-4   text-xl font-semibold">
                    {image.title}
                  </h1>
                  <p className="text-sm text-justify py-2">{image.desc}</p>
                </div>
                <Button className="ml-3 text-white w-32 bg-primary mb-3 mt-6">
                  Read More
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default LatestBlogs;
