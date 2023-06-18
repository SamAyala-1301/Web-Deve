import Navbar from "../Componets/Navbar";
import Hero from "../Componets/Hero";
import ContctImg from "../Assets/pexels-brett-sayles-2310604.jpg";
import Footer from "../Componets/Footer";
import ContactForm from "../Componets/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={ContctImg}
        title="Contact"
        btnClass="mid"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
