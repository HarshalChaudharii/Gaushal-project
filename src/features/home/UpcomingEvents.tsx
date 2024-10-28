import event1 from "@/assets/images/event1.jpg";
import event2 from "@/assets/images/event2.jpg";
import event6 from "@/assets/images/event6.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, MapPin } from "lucide-react";

const images = [
  {
    id: 1,
    src: event1,
    alt: "Event 1",
    title: "See the Mother Cow",
    desc: "It saves our culture and future",
    location: "Nashik, Maharashtra",
    date: "12th August 2021",
  },
  {
    id: 2,
    src: event2,
    alt: "Event 2",
    title: "Bhavya Godan Mahotsav",
    desc: "Everything you need to know about godan",
    location: "Dubai, UAE",
    date: "12th August 2021",
  },
  {
    id: 3,
    src: event6,
    alt: "Event 3",
    title: "Mahashanti Hawan in Gaushala",
    desc: "For the gaushala and all the cows",
    location: "Aadgaon shivar, Maharashtra",
    date: "12th August 2021",
  },
];

export const UpcomingEvents = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center bg-[#F2F2F2]">
      <h1 className="text-center mt-20 text-primary font-semibold">
        UPCOMING EVENTS
      </h1>
      <h2 className="w-[90%] md:w-[50%]  text-centers font-semibold text-3xl  ">
        See the Latest Event in Gaushala
      </h2>

      <div>
        <div className=" max-w-6xl md:mx-6 mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="drop-shadow-lg">
              <div className="w-full h-56">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="w-full bg-primary bg-opacity-50 p-4">
                <span className="text-xs justify-between w-full flex gap-2">
                  <p className="flex gap-1">
                    <MapPin size={15} /> {image.location}
                  </p>{" "}
                  <p className="flex gap-1">
                    <CalendarDays size={15} />
                    {image.date}
                  </p>
                </span>
                <h1 className="mt-4  text-justify text-xl font-semibold">
                  {image.title}
                </h1>
                <p className="text-sm py-2">{image.desc}</p>
                <Button className="text-white bg-primary mt-6">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
