import event1 from "@/assets/images/event1.jpg";
import event2 from "@/assets/images/event2.jpg";
import event6 from "@/assets/images/event6.jpg";
import GalleryAlbum from "@/components/gallery/GalleryAlbum";

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

const OurWork = () => {
  return (
    <div className="w-full pb-20 flex flex-col items-center justify-center ">
      <h1 className="text-center mt-20 text-primary font-semibold">OUR WORK</h1>
      <h2 className="w-[50%] text-center font-semibold text-3xl  ">
        Home for All the Cows
      </h2>
      <p className="w-[55%] text-center mb-6">
        Cows are let free during the day and given the best possible
        environment. Healthy fodder is given to each and every cow with lots of
        love and affection. A big pond is made for then to bathe. Regular
        medical checkups are done and other facilities are provided for them.
      </p>

      {/* <div>
        <div className=" w-full  mt-8 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="drop-shadow-lg">
              <div className="w-full h-56">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <GalleryAlbum />
    </div>
  );
};

export default OurWork;
