import GoogleMapReact from "google-map-react";
import { Map } from "../styles/Map.styled";

const MyTrips = ({ center, zoom }) => {
  return (
    <Map>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBl3hsfrJQ5TgpSiGfJbxqBJ2v_igpwO5c" }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
    </Map>
  );
};

MyTrips.defaultProps = {
  center: {
    lat: 6.605874,
    lng: 3.349149
  },
  zoom: 6
};

export default MyTrips;
