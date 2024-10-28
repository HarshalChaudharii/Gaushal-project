import React from "react";
import protection1 from "@/assets/images/protection1.jpg";
import protection2 from "@/assets/images/protection2.jpg";
import protection3 from "@/assets/images/protection3.jpg";
import protection4 from "@/assets/images/protection4.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  {
    id: 1,
    src: protection1,
    alt: "Protection 1",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashalawhich are brought through various channels such as Police,Government, NGOs, Farmers etc. We give these gauvansh a secondlife.",
  },
  {
    id: 2,
    src: protection2,
    alt: "Protection 2",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashalawhich are brought through various channels such as Police,Government, NGOs, Farmers etc. .",
  },
  {
    id: 3,
    src: protection3,
    alt: "Protection 3",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashalawhich are brought through various channels such as Police,Government, NGOs, Farmers etc. We give these gauvansh a secondlife.",
  },
  {
    id: 4,
    src: protection4,
    alt: "Protection 4",
    info: "As on date 21,000+ stray/destitute Desi Indian Cows/bulls and their progenies are being sheltered in our Gaurakshashalawhich are b",
  },
];

const WhatWeDo = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center bg-[#F2F2F2]">
      <h1 className="text-center  mt-20 text-primary font-semibold">
        WHAT WE DO
      </h1>
      <h2 className="w-[90%] md:w-[70%] text-center font-semibold text-3xl  ">
        What we do to protection of cows, calves and their health
      </h2>

      <div>
        <div className="max-w-6xl mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:mx-6 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image.id} className="border-2 p-3 drop-shadow-lg">
              <div className="w-full h-44">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>

              <p className="mt-4 text-justify text-sm">{image.info}</p>
            </div>
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
