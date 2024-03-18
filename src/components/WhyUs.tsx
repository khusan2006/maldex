import { Gift, Globe, MicVocal, ShoppingBasket, Truck } from "lucide-react";
import RussiaFlag from "../assets/free-icon-russia-5315463 1.png";
const WhyUs = () => {
  return (
    <section className="md:px-6 px-3 py-6">
      <h3 className="text-3xl text-blue-700 font-medium">
        <span className="text-red-500"> Почему мы?</span> Всё под 1 крышей
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-4 md:px-8">
        <li>
          <MicVocal stroke="blue" strokeWidth={"1.5px"} size={"50"} />
          <h5 className="text-blue-600 text-xl mt-1 font-medium">Брендинг</h5>
          <ul className="flex flex-col gap-2 mt-4 text-[14px] list-disc list-inside">
            <li>Тампопечать</li>
            <li>Вышивка</li>
            <li>Шелкография</li>
            <li>Гравировка</li>
            <li>Тампопечать</li>
            <li>Вышивка</li>
            <li>Шелкография</li>
            <li>Гравировка</li>
            <li>Тампопечать</li>
            <li>Вышивка</li>
          </ul>
        </li>
        <li>
          <ShoppingBasket stroke="#9333ea" strokeWidth={"1.5px"} size={"50"} />
          <h5 className="text-purple-600 text-xl mt-1 font-medium">
            Складирование
          </h5>
          <ul className="flex flex-col gap-2 mt-4 text-[14px] list-disc list-inside">
            <li>Тампопечать</li>
            <li>Сокращение складских затрат для наших клиентов</li>
            <li>Управление складской инвентаризацией (ушло/пришло)</li>
          </ul>
          <Truck
            stroke="#16A34A"
            strokeWidth={"1.5px"}
            className="mt-3"
            size={"50"}
          />
          <h5 className="text-green-600 text-xl mt-1 font-medium">Логистика</h5>
          <ul className="flex flex-col gap-2 mt-4 text-[14px] list-disc list-inside">
            <li>Тампопечать</li>
            <li>Сокращение складских затрат для наших клиентов</li>
          </ul>
        </li>
        <li>
          <Globe stroke="#FACD2B" strokeWidth={"1.5px"} size={"50"} />
          <h5 className="text-yellow-400 text-xl mt-1 font-medium">
            Сувениры со всего мира
          </h5>
          <ul className="flex flex-col gap-2 mt-4 text-[14px] list-disc list-inside">
            <li>Более 1 000 000 наименований</li>
          </ul>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="flex items-center gap-2">
              <img src={RussiaFlag} className="h-8 w-8 md:w-auto md:h-auto" alt="" />
              <span className="text-xs md:text-sm">Россия</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={RussiaFlag} className="h-8 w-8 md:w-auto md:h-auto" alt="" />
              <span className="text-xs md:text-sm">Россия</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={RussiaFlag} className="h-8 w-8 md:w-auto md:h-auto" alt="" />
              <span className="text-xs md:text-sm">Россия</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={RussiaFlag} className="h-8 w-8 md:w-auto md:h-auto" alt="" />
              <span className="text-xs md:text-sm">Россия</span>
            </div>
          </div>
        </li>
        <li>
          <Gift stroke="#dc2626" strokeWidth={"1.5px"} size={"50"} />
          <h5 className="text-red-600 text-xl mt-1 font-medium">Дизайн макеты бесплатно</h5>
          <div className="text-blue-600 text-xl font-medium mt-6 flex items-center gap-1">
            <span className="text-xl md:text-3xl font-medium border-[3px] border-blue-600 rounded-full flex items-center justify-center p-0.5">15</span>
            лет на рынке
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WhyUs;
