import Hero from "../Componets/Hero";
import Navbar from "../Componets/Navbar";
import HomeImg from "../Assets/pexels-taryn-elliott-3889991.jpg";
import Destintion from "../Componets/Destination";
import Trip from "../Componets/Trip";
import Footer from "../Componets/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        Heroimg={HomeImg}
        title="Your Journey You Story"
        text="Choose Your Favourite Destination"
        btntext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destintion />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
