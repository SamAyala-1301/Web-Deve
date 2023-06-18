import Goa1 from "../Assets/goa-1.jpg";
import Goa2 from "../Assets/pexels-quang-nguyen-vinh-3355788.jpg";
import Manali1 from "../Assets/pexels-melbin-jacob-13561678.jpg";
import Manali2 from "../Assets/pexels-sanket-barik-7846481.jpg";
import DestinationData from "./DestinationData";
import "./DestinatonStyles.css";
const Destintion = () => {
  return (
    <div className="destination">
      <h1>Popular Destintions</h1>
      <p>Take Memories, leave Footprints</p>
      <DestinationData
        className="first-des"
        heading="Goa, India"
        text="Famous for its pristine beaches, hippie vibes, laidback lifestyle
      and vibrant parties, Goa is counted among the best holiday
      destinations in India. The union territory is frequented by
      tourists year-round, especially in the winter season when the
      climate is pleasant, and the entire place comes alive with
      Christmas and New Year celebrations."
        img1={Goa1}
        img2={Goa2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Manali, India"
        text="With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year."
        img1={Manali1}
        img2={Manali2}
      />
    </div>
  );
};

export default Destintion;
