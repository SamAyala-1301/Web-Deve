import Navbar from "../Componets/Navbar";
import Hero from "../Componets/Hero";
import AboutImg from "../Assets/pexels-caroline-cagnin-2007401.jpg";
import Footer from "../Componets/Footer";
import AboutUs from "../Componets/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" Heroimg={AboutImg} title="About" btnClass="mid" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
