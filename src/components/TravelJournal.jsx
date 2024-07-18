import "../App.css";

const TravelJournal = (props) => {
  console.log(props);
  return (
    <div className="card">
    <div className="card-container">

      <img className="photo" src={props.imageUrl} alt="photo"/>
    <div>

      <span className="location">{props.location}</span>
      <a className="google-map">{props.googleMapsUrl}</a>
      <h2 className="title">{props.title}</h2>
      <span className="dates">
        {props.startDate}- {props.endDate}
      </span>
      <p className="description">{props.description}</p>
    </div>
    </div>
    </div>
  );
};

export default TravelJournal;
