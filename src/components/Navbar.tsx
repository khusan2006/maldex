import { Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex px-3 md:px-6 py-5 gap-6">
      <button className="bg-red-500 text-white flex items-center px-2 py-1 rounded-lg">
        <Menu className="w-[18px] h-[18px] mr-1" />
        <span className="hidden md:block">Каталог</span>
      </button>
      <button className="border-[1.5px] hidden md:block border-gray-900 px-2 py-1 rounded-lg">
        <Menu className="w-[18px] h-[18px]" />
      </button>
      <div className="flex items-center flex-grow bg-red-500 overflow-hidden border-2 border-red-500 rounded-xl ">
        <input type="text" className="text-xs w-[85%] md:w-[92%] p-2 bg-white rounded-r-2xl" placeholder="(Например: термокружка)" />
        <button className="bg-red-500 h-full w-[15%] md:w-[8%] flex items-center justify-center ">
          <Search stroke="white" className="w-[18px] h-[18px]" />
        </button>
      </div>
      <button className="hidden md:block relative text-2xl font-normal pr-8 underline text-red-500">
        new
        <span className="absolute text-sm right-[-1px]">243</span>
      </button>
      <button className="hidden md:block relative text-2xl font-normal pr-8 underline text-blue-400">
        hits
        <span className="absolute text-sm right-[-1px]">243</span>
      </button>
    
    </nav>
  );
};

export default Navbar;
