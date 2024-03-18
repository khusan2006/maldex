import { Heart, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../assets/Maldex logo.png";

const Header = () => {
  return (
    <header className="text-xs font-normal text-gray-900 flex px-3 md:px-6 items-center justify-between py-4 border-b-[1px] border-gray-400">
      <div className="flex gap-4">
        <img
          src={Logo}
          alt="maldex logo"
          width={"130px"}
          height={"20px"}
          className="w-[130px] h-"
        />
        <a className="flex items-center" href="tel:+88003336784">
          <Phone className="w-[18px] h-[18px] mr-1" strokeWidth={"1.5px"} />
          <span className="hidden md:block">8-800-333-6784</span>
        </a>
        <a className="flex items-center" href="mailto:info@maldex.ru">
          <Mail className="w-[18px] h-[18px] mr-1" strokeWidth={"1.5px"} />{" "}
          <span className="hidden md:block">info@maldex.ru</span>
        </a>
        <a className="hidden md:flex items-center" href="https://googlemaps.com">
          <MapPin className="w-[18px] h-[18px] mr-1" strokeWidth={"1.5px"} />{" "}
          Москва
        </a>
      </div>
      <div className="hidden md:block">
        <p className="font-medium text-xs text-gray-400">
          Минимальная сумма заказа от 30 тыс рублей
        </p>
      </div>
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-3">
          <li>
            <a href="/">Доставка</a>
          </li>
          <li>
            <a href="/">Оплата</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
        </ul>
        <Heart fill="red" stroke="red" className="hidden md:block" />
        <div className="flex relative ml-2">
          <div className="absolute top-0.5 left-[-12px] text-white bg-red-500 p-3 rounded-full w-3 h-3 flex items-center justify-center">
            3
          </div>
          <div className="bg-[#F7F7F7] px-3.5 py-1.5 rounded-2xl flex items-center justify-center">
            14 619,00 ₽
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
