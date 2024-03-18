import Logo from "../assets/Maldex logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-5">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 md:gap-0">
        <div className="flex flex-col justify-between">
          <p className="text-sm opacity-50">По всем вопросам</p>
          <h5 className="md:text-4xl mt-3 underline">
            maldex <br />
            @info.com
          </h5>
        </div>
        <div className="flex flex-col md:justify-between md:items-center">
          <p className="text-sm opacity-50  md:mr-6">
            Бесплатный звонок <br />
            из любой точки России
          </p>
          <h5 className="md:text-4xl mt-3 underline">
            8-800 <br /> 333-67-84
          </h5>
        </div>
        <div className="flex items-start justify-end">
          <img src={Logo} alt="maldex logo" className="pr-10" />
        </div>
      </div>

      <div className="grid md:grid-cols-5 grid-cols-1 mt-10">
        <div className="hidden md:flex text-xs  flex-col gap-12">
          <p className="opacity-50">Основные категории</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
          </ul>
        </div>
        <div className="text-xs hidden md:flex flex-col gap-12">
          <ul className="flex flex-col gap-2 mt-6">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
          </ul>
        </div>
        <div className="text-xs hidden md:flex flex-col gap-12">
          <p className="opacity-50">Основные категории</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
          </ul>
        </div>
        <div className="text-xs flex flex-col gap-12">
          <p className="opacity-50">Адрес</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Мы в Москве:</a>
            </li>
            <li>
              <a href="/">Огородный проезд, д. 5, стр. 2</a>
            </li>
            <li>
              <a href="/">Телефон:</a>
            </li>
            <li>
              <a href="/">+7 (499) 704-33-62</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Мы в Санкт-Петербурге</a>
            </li>
            <li>
              <a href="/">Московский пр., 10-12</a>
            </li>
            <li>
              <a href="/">Телефон:</a>
            </li>
            <li>
              <a href="/"> +7 (812) 389-44-14</a>
            </li>
          </ul>
        </div>
        <div className="text-xs hidden md:flex flex-col gap-12">
          <p className="opacity-50">Мы в сети</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/">Коллекции</a>
            </li>
            <li>
              <a href="/">Автомобильные аксессуары</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-[1px] border-gray-900 my-4" />
      <div className="flex md:flex-row gap-4 md:gap-0 flex-col-reverse md:justify-between items-start md:items-center text-xs">
        <div>© 2023 Maldex. Все права защищены.</div>
        <div className="flex md:gap-2  gap-4 flex-col md:flex-row">
          <button className="border-[1px] border-white p-1 rounded-md">
            Правила использования материалов
          </button>
          <button className="border-[1px] border-white p-1 rounded-md">
            Политика конфиденциальности
          </button>
          <button className="border-[1px] border-white p-1 rounded-md">
            Написать сообщение
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
