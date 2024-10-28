import "./gallary.css";
import image1 from "@/assets/carousel/banner1.jpg";
import image2 from "@/assets/carousel/banner2.jpg";
import image3 from "@/assets/carousel/banner3.png";
import image4 from "@/assets/carousel/banner4.jpg";
import image5 from "@/assets/carousel/banner5.jpg";
import image6 from "@/assets/images/breeding.jpg";

const images = [
  {
    id: 1,
    src: image1,
    alt: "Banner 1",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
  {
    id: 2,
    src: image2,
    alt: "Banner 2",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
  {
    id: 3,
    src: image3,
    alt: "Banner 3",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
  {
    id: 4,
    src: image4,
    alt: "Banner 4",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
  {
    id: 5,
    src: image5,
    alt: "Banner 5",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
  {
    id: 6,
    src: image6,
    alt: "Banner 6",
    title: "Beauty Of Life",
    galleryName: "Gallery Name",
  },
];

const GalleryAlbum = () => {
  return (
    <div className="container-fluid  gallery py-5 my-5 px-0">
      {/* <div className="text-center mx-auto pb-5">
        <h5 className="text-uppercase font-semibold text-primary">Our work</h5>
        <h1 className="mb-4 text-2xl font-semibold">
          We consider environment welfare
        </h1>
      </div> */}

      <div className="gallery-container">
        <div className="row g-0 max-w-6xl grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div key={image.id} className="col-lg-4">
              <div className="gallery-item">
                <img
                  src={image.src}
                  className="img-fluid w-full h-full"
                  alt={image.alt}
                />
                <div className="search-icon">
                  <a
                    href={image.src}
                    data-lightbox={`gallery-${image.id}`}
                    className="my-auto"
                  ></a>
                </div>
                <div className="gallery-content">
                  <div className="gallery-inner pb-5">
                    <a href="#" className="h4 text-white">
                      {image.title}
                    </a>
                    <a href="#" className="text-white">
                      <p className="mb-0">{image.galleryName}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryAlbum;
