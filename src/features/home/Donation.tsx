import { Button } from "@/components/ui/button";
import React from "react";
import donation1 from "@/assets/images/donation1.jpg";
import donation2 from "@/assets/images/donation2.jpg";
import donation3 from "@/assets/images/donation3.jfif";

const images = [
  {
    id: 1,
    src: donation1,
    alt: "Donation 1",
    title: "Donation 1",
    desc: "COW CARE AND WALEFARE",
    info: "We are a non-profit organization that relies on donations to continue our work.",
  },

  {
    id: 2,
    src: donation2,
    alt: "Donation 2",
    title: "Donation 2  organization that",
    desc: "VETERINARY CARE",
    info: "We are a non-profit organization that relies on donations to continue our work.",
  },
  {
    id: 3,
    src: donation3,
    alt: "Donation 3",
    title: "Donation 3 non-profit",
    desc: "FOOD AND SHELTER",
    info: "We are a non-profit organization that relies on donations to continue our work.",
  },
];

const Donation = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center ">
      <h1 className="text-center mt-20 text-primary font-semibold">DONATION</h1>
      <h2 className="w-[90%] md:w-[50%] font-semibold text-3xl  text-center">
        Save gau mata: Your kindness can provide food, shelter and medical care
        to cows in need.
      </h2>

      <div>
        <div className="max-w-6xl mx-10 mt-8 grid grid-cols-1 gap-5 md:mx-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="drop-shadow-lg">
              <div className="aspect-[18/20] relative overflow-hidden brightness-50">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="absolute p-2 bottom-6">
                <h2 className="text-orange-400 font-bold text-xl">
                  {image.desc}
                </h2>
                <h2 className="flex text-white font-semibold text-2xl">
                  {image.title}
                </h2>
                <p className=" text-white text-justify text-sm">{image.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button className="bg-primary  mt-20 text-white">All Donations</Button>
      </div>
    </div>
  );
};

export default Donation;
