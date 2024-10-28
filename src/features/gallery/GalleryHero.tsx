import galleryBanner from "@/assets/carousel/banner6.jpg";

const GalleryHero = () => {
  return (
    <div className="w-full relative h-full">
      <div className="w-full relative -z-10 ">
        <div className="w-full  overflow-hidden h-96 bg-black ">
          <img
            src={galleryBanner}
            alt=""
            className="w-full object-cover h-full opacity-30"
          />
        </div>
      </div>
      <div className="text-white w-full text-center absolute top-[8rem] flex flex-col items-center justify-center">
        <h1 className="text-4xl  font-semibold mb-8">About Us</h1>
        <p className="w-[90%] md:w-[34%] flex">
          "May Mother Cow be welcomed into our homes" Many every person give a
          place to Mother Cow in their life, family and heart
        </p>
      </div>
    </div>
  );
};

export default GalleryHero;
