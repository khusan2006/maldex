import { ArrowLeft, ArrowRight } from "lucide-react";

const Sales = () => {
  return (
    <div className="bg-gray-100 px-5 py-3 flex justify-between items-center">
      <button><ArrowLeft stroke="red" className="w-[18px] h-[18px]" /> </button>
      <div className="flex gap-1 text-[14px] font-bold items-center">
        <span className="text-red-500">30%</span>
        <p>Cкидка при первом заказе! 🎉</p>
        <button className="hidden md:block border-[0.5px] border-black rounded-md p-[0.5px]">подробнее</button>
      </div>
      <button><ArrowRight stroke="red" className="w-[18px] h-[18px]" /> </button>
    </div>
  );
};

export default Sales;
