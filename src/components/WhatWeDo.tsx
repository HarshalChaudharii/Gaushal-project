import protection1 from "@/assets/images/protection1.jpg";
import protection2 from "@/assets/images/protection2.jpg";
import protection3 from "@/assets/images/protection3.jpg";
import protection4 from "@/assets/images/protection4.jpg";
import protection5 from "@/assets/images/banner2.jpg";
import protection6 from "@/assets/images/banner3.jpg";
import protection7 from "@/assets/images/donation1.jpg";
import protection8 from "@/assets/images/event2.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

const images = [
  {
    id: 1,
    src: protection1,
    alt: "Protection 1",
    title: "Protection of Cows",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashala which are brought through various channels such as Police, Government, NGOs, Farmers etc. We give these gauvansh a second life.",
  },
  {
    id: 2,
    src: protection2,
    alt: "Protection 2",
    title: "Shelter",
    info: "We focus on providing a safe and caring environment for the cows, ensuring they receive proper nutrition, medical care, and a clean habitat.",
  },
  {
    id: 3,
    src: protection3,
    alt: "Protection 3",
    title: "Dry Fooder Storage",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashala which are brought through various channels such as Police, Government, NGOs, Farmers etc. We give these gauvansh a second life.",
  },
  {
    id: 4,
    src: protection4,
    alt: "Protection 4",
    title: "Medical Facility",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashala which are brought through various channels such as Police, Government, NGOs, Farmers etc.",
  },
  {
    id: 5,
    src: protection5,
    alt: "Protection 5",
    title: "Spiritual and Cultural Activities",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashala which are brought through various channels such as Police, Government, NGOs, Farmers etc.",
  },
  {
    id: 6,
    src: protection6,
    alt: "Protection 6",
    title: "Breeding",
    info: "Regular health check-ups and medical attention are provided to prevent and treat illnesses, ensuring the well-being of every cow.",
  },
  {
    id: 7,
    src: protection7,
    alt: "Protection 7",
    title: "Nutrition and Diet",
    info: "A balanced diet is maintained for the cows, including organic fodder and supplements, to ensure their optimal health and growth.",
  },
  {
    id: 8,
    src: protection8,
    alt: "Protection 8",
    title: "Educational and Awareness Programs",
    info: "Engaging the local community in cow protection and welfare activities, spreading awareness, and encouraging participation.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center ">
      <h1 className="text-center  mt-20 text-primary font-semibold">
        WHAT WE DO
      </h1>
      <h2 className="w-[90%] md:w-[70%] text-center font-semibold text-3xl  ">
        What we do to protection of cows, calves and their health
      </h2>

      <div>
        <div className="max-w-6xl mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:mx-6 lg:grid-cols-4">
          {images.map((image) => (
            <Card key={image.id} className="relative pb-2 ">
              <div className="w-full h-44 bg-black">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <h1 className="absolute top-36 left-2 text-xl font-semibold text-white ">
                {image.title}
              </h1>
              <p className="mt-4 text-justify text-sm px-2">{image.info}</p>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Button className="bg-primary text-whites mt-20">Read More</Button>
      </div>
    </div>
  );
};

export default WhatWeDo;
