import GalleryImage1 from "../assets/gallery 1.png";
import GalleryImage2 from "../assets/gallery 2.png";
import GalleryImage3 from "../assets/gallery 3.png";
import GalleryImage4 from "../assets/gallery 4.png";
import GalleryImage5 from "../assets/gallery 5.png";
import GalleryImage6 from "../assets/gallery 6.png";

const Gallery = () => {
  return (
    <section className="md:px-6 px-3 py-5">
      <h3 className="text-3xl text-red-500 font-medium mb-4">
        Сувенирная продукция
      </h3>
      <p className="text-base font-normal mb-8">
        Каталог «от ручки до ракеты» «от промо до VIP» <br /> Более 1 000 000
        бизнес сувениров со всего мира
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-[150px,150px,150px,150px,150px,150px] grid-rows-[150px,150px,150px,150px,150px,150px,150px,150px,150px] gap-3">
        <div className="col-start-1 col-end-3 md:row-start-1 md:row-end-3 overflow-hidden">
          <img
            src={GalleryImage1}
            className="h-full w-full"
            alt="gallry image"
          />
        </div>
        <div className="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2 col-start-1 col-end-3 row-start-2 row-end-3 overflow-hidden">
          <img
            src={GalleryImage2}
            alt="gallry image"
            className="h-full w-full"
          />
        </div>
        <div className="md:row-start-2 md:row-end-2 md:col-start-3 md:col-end-3 col-start-1 col-end-2 overflow-hidden">
          <img
            src={GalleryImage3}
            alt="gallry image"
            className="h-full w-full"
          />
        </div>
        <div className="md:row-start-2 md:row-end-2 md:col-start-4 md:col-end-4 col-start-2 col-end-3 overflow-hidden">
          <img
            src={GalleryImage4}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-1 md:row-end-3 md:col-start-5 md:col-end-7 col-start-1 col-end-3 row-start-4 row-end-6 overflow-hidden">
          <img
            src={GalleryImage5}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-3 md:row-end-5 col-start-1 col-end-1  overflow-hidden">
          <img
            src={GalleryImage6}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-3 md:row-end-5 col-start-2 md:col-end-4 col-end-3 overflow-hidden">
          <img
            src={GalleryImage2}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-3 md:row-end-5 md:col-start-4 md:col-end-7 col-start-1 col-end-3 overflow-hidden">
          <img
            src={GalleryImage3}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-5 md:row-end-7 col-start-1 col-end-3 overflow-hidden">
          <img
            src={GalleryImage4}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-5 md:row-end-6 md:col-start-3 md:col-end-3 col-start-1 col-end-2 overflow-hidden">
          <img
            src={GalleryImage6}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="md:row-start-6 md:row-end-6 md:col-start-3 md:col-end-3 col-start-2 col-end-3 overflow-hidden">
          <img
            src={GalleryImage5}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>

        <div className="md:block hidden row-start-5 row-end-7 col-start-4 col-end-6 overflow-hidden">
          <img
            src={GalleryImage6}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className="hidden md:blcok row-start-5 row-end-5 col-start-6 col-end-7 overflow-hidden">
          <img
            src={GalleryImage1}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
        <div className=" hidden md:block row-start-6 row-end-7 col-start-6 col-end-7 overflow-hidden">
          <img
            src={GalleryImage3}
            alt="gallry image"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
