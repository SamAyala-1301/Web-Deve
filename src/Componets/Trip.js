import Tripdata from "./TripData";
import Coorg1 from "../Assets/Coorg-1.jpg";
import Kolkata1 from "../Assets/kolkata.jpg";
import udaipr1 from "../Assets/udaipur.jpg";
import "./TripStyls.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Exploration is really the essence of the human spirit</p>
      <div className="tripcard">
        <Tripdata
          image={Coorg1}
          headin4="Trip to Coorg"
          text="Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality."
        />
        <Tripdata
          image={udaipr1}
          headin4="Trip to Udaipur"
          text="Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality."
        />
        <Tripdata
          image={Kolkata1}
          headin4="Trip to Kolkata"
          text="Starting from admiring the flourishing art scene in the city to going on rewarding gastronomical explorations to wandering amidst the countless bazaars to sitting by the banks of the Hooghly and enjoying a peaceful sunset, Kolkata is soaked in layers and layers of heritage and culture, and peeling off each layer to look beneath the hood is a very rewarding, once-in-a-lifetime experience. As the famous quote goes, If you want a city with a soul, come to Calcutta."
        />
      </div>
    </div>
  );
}
export default Trip;
