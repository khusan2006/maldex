import { CheckCircle, PresentationIcon, Truck } from "lucide-react";

const Cta = () => {
  return (
    <section className="md:px-6 px-3 py-5">
      <h3 className="text-3xl text-blue-700 font-medium">
        <strong>С Maldex</strong> просто как{" "}
        <span className="text-red-500">раз</span>{" "}
        <span className="text-yellow-400">два</span>
        <span className="text-green-500"> три</span>
      </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-0  mt-12">
      
        <div className="flex gap-3">
          <div className="bg-red-500 h-[fit-content] p-4 rounded-lg">
            <CheckCircle className="" size={"40"} stroke="white" />
          </div>
          <div className="text-sm">
            <h6 className="font-medium text-red-500 mb-1">Оставьте заявку по телефону</h6>
            <p className="font-medium mb-1">8 (800) 777-59-19</p>
            <p>либо оформите заказ на сайте</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-yellow-400 h-[fit-content] p-4 rounded-lg">
            <PresentationIcon className="" size={"40"} stroke="white" />
          </div>
          <div className="text-sm flex flex-col justify-center">
            <h6 className="font-medium text-yellow-500 mb-1">Подтвердите заказ у <br /> менеджера</h6>
          
          </div>
        </div>
        <div className="flex gap-3">
          <div className="bg-green-500 h-[fit-content] p-4 rounded-lg">
            <Truck className="" size={"40"} stroke="white" />
          </div>
          <div className="text-sm">
            <h6 className="font-medium text-green-500 mb-1">Получите товар <br /> курьерской доставкой</h6>
            <p>или в нашем офисе: Варшавское <br /> шоссе 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
