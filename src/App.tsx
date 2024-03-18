import AboutClients from "./components/AboutClients";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Clients from "./components/Clients";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import WhyUs from "./components/WhyUs";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sales />
      <Categories />
      <AboutUs />
      <WhyUs />
      <AboutClients />
      <Clients />
      <Cta />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
