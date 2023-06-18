import Navbar from "../Componets/Navbar";
import Hero from "../Componets/Hero";
import ServiceImg from "../Assets/pexels-asad-photo-maldives-3155666.jpg";
import Footer from "../Componets/Footer";
import Trip from "../Componets/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={ServiceImg}
        title="Service"
        btnClass="mid"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
