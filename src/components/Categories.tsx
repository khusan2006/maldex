import CategoryImage1 from "../assets/category 1.png";
import CategoryImage2 from "../assets/category 2.png";
import CategoryImage3 from "../assets/category 3.png";
import CategoryImage4 from "../assets/Photorealistic_Magazine_MockUp_2_open 1.png";
const Categories = () => {
  return (
    <section className="md:px-6 px-3 py-5">
      <p className="hidden md:block text-xs font-normal text-gray-400">
        Промо одежда / Портативные колонки / Беспроводная колонка Chubby /{" "}
        <span className="text-red-500"> Артикул 7557.30</span>
      </p>

      <div className="flex md:flex-row flex-col-reverse h-[530px] md:h-[370px] w-full mt-4 gap-2">
        <div className="flex-[5] flex gap-2 h-full">
          <div className="h-full w-full flex-[6] bg-gray-100 flex justify-center items-center">
            <img src={CategoryImage1} alt="category image" />
          </div>
          <div className="flex-4 flex flex-col gap-2 h-full">
            <div className=" bg-gray-100 flex justify-center items-center h-[49%] ">
              <img src={CategoryImage2} alt="category image" />
            </div>
            <div className=" bg-gray-100 h-[49%]">
              <img src={CategoryImage3} alt="category image" />
            </div>
          </div>
        </div>
        <div className="flex-[6] bg-blue-500 h-full text-white flex  pt-10 pb-3">
          <div className="flex flex-1 flex-col justify-between h-full ml-6">
            <p className="text-3xl ">
              скачать <br /> презентацию
            </p>
            <div className="flex gap-3">
              <button className="border-[1px] px-4 py-1">заказать</button>
              <button className="border-[1px] px-4 py-1">скачать</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={CategoryImage4} alt="" />
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-[370px] w-full mt-4 gap-2">
        <div className="flex-[6] bg-blue-500 h-full text-white flex  pt-10 pb-3">
          <div className="flex flex-1 flex-col justify-between h-full ml-6">
            <p className="text-3xl ">
              скачать <br /> презентацию
            </p>
            <div className="flex gap-3">
              <button className="border-[1px] px-4 py-1">заказать</button>
              <button className="border-[1px] px-4 py-1">скачать</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={CategoryImage4} alt="" />
          </div>
        </div>
        <div className="flex-[5] flex-col flex gap-2 h-full">
          <div className="h-full w-full flex-[6] bg-gray-100 flex justify-center items-center">
            <img src={CategoryImage1} alt="category image" />
          </div>
          <div className="flex-4 flex  gap-2 h-full">
            <div className="flex-1 bg-gray-100 flex justify-center items-center  h-[90%]">
              <img src={CategoryImage2} alt="category image" />
            </div>
            <div className="flex-1 bg-gray-100 h-[90%]">
              <img src={CategoryImage3} alt="category image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
