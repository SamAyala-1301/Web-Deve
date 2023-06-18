import "./TripStyls.css";

function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-card-img">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.headin4}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default Tripdata;
