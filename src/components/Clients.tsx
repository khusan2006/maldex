import Client1 from '../assets/Screenshot 2024-03-04 at 20.05 1.png'
import Client2 from '../assets/Screenshot 2024-03-04 at 20.05 2.png'
import Client3 from '../assets/Screenshot 2024-03-04 at 20.05 3.png'
import Client4 from '../assets/Screenshot 2024-03-04 at 20.05 4.png'
import Client5 from '../assets/Screenshot 2024-03-04 at 20.05 5.png'
const Clients = () => {
  return (
    <section className="md:px-6 px-3 py-6">
      <h3 className="text-3xl text-red-500 font-medium">
        Вы будете в <span className="font-bold">БОЛЬШОЙ</span> компании друзей
      </h3>
      <div className='flex flex-wrap'>
        <img src={Client1} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client2} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client4} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client3} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client1} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client5} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client4} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client3} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client2} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client5} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client1} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client5} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client2} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client3} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client1} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client4} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client3} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client2} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client4} alt="company logo" className='w-28 md:w-60 h-20' />
        <img src={Client5} alt="company logo" className='w-28 md:w-60 h-20' />
      </div>
    </section>
  );
};

export default Clients;
