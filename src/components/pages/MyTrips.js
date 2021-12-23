import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
import { Map } from "../styles/Map.styled";

const MyTrips = ({ center, zoom }) => {
  const [step, setStep] = useState(1);
  const [pickup, setPickup] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [busType, setBusType] = useState("");
  const [data, setData] = useState({});

  // proceed to next step

  const nextStep = () => {
    if (step === 4) return;
    setStep(step => step + 1);
  };

  // go back to previous step

  const prevStep = () => {
    setStep(step => step - 1);
  };

  const increasePassengers = () => {
    setPassengers(passengers => passengers + 1);
  };

  const decreasePassengers = () => {
    setPassengers(passengers => passengers - 1);
  };

  const setBusFML = () => {
    setBusType(busType => "fml");
  };
  const setBusGIG = () => {
    setBusType(busType => "gig");
  };
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      nextStep();
    }
  };

  const updateData = (type, newData) => {
    setData(data => {
      return { ...data, [type]: newData };
    });
  };
  // handle data change
  // const handleChange = input => e => {
  //   input: e.target.value;
  // };
  const handlePickUp = address => {
    setAddress(address);
  };
  const handleDropOff = address2 => {
    setAddress2(address2);
  };
  const handleSelectPickUp = address => {
    geocodeByAddress(address)
      .then(results => setAddress(results[0].formatted_address))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  const handleSelectDropOff = address2 => {
    geocodeByAddress(address2)
      .then(results => setAddress2(results[0].formatted_address))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  return (
    <Map>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBl3hsfrJQ5TgpSiGfJbxqBJ2v_igpwO5c" }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>

      <div className="location-card">
        {busType === "" && (
          <div className="initial">
            <div className="form-header">
              <img className="border" src="img/border.svg" alt="border" />
              <h1
                onClick={nextStep}
                className={`${step === 1 ? "bigger" : ""}`}
              >
                Pickup
              </h1>
              <h1 className={`${step === 2 ? "bigger" : ""}`}>
                Drop off <img src="img/drop-down.svg" alt="" />
              </h1>
            </div>
            <div className="form">
              {step === 1 && (
                <PlacesAutocomplete
                  value={address}
                  onChange={handlePickUp}
                  onSelect={handleSelectPickUp}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading
                  }) => (
                    <div className="form-container">
                      <div className="input-container">
                        <input
                          {...getInputProps({
                            placeholder: "Add a pickup location",
                            className: "location-search-input"
                          })}
                          id="input-id-1"
                          type="text"
                          autoComplete="off"
                          value={address}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>...loading </div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer"
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer"
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className: "suggestions",
                                  style
                                })}
                              >
                                <span>
                                  <img src="img/location.png" alt="" /> &nbsp;
                                  {suggestion.description}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              )}

              {step === 2 && (
                <PlacesAutocomplete
                  value={address2}
                  onChange={handleDropOff}
                  onSelect={handleSelectDropOff}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading
                  }) => (
                    <div className="form-container">
                      <div className="input-container">
                        <input
                          {...getInputProps({
                            placeholder: "Add a dropoff location",
                            className: "location-search-input"
                          })}
                          id="input-id-1"
                          type="text"
                          autoComplete="off"
                          value={address2}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>...loading </div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer"
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer"
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className: "suggestions",
                                  style
                                })}
                              >
                                <span>
                                  <img src="img/location.png" alt="" /> &nbsp;
                                  {suggestion.description}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      )}
                    </div>
                  )}
                </PlacesAutocomplete>
              )}

              {step === 3 && (
                <div className=" select-passengers-container">
                  <div className="select-passengers-header">
                    <p>Select number of passengers boarding</p>
                  </div>
                  <div className="select-passengers">
                    <h5>Passengers</h5>
                    <div className="passenger-btn-container">
                      <button onClick={increasePassengers}>+</button>
                      <div className="number">{passengers}</div>
                      <button
                        onClick={decreasePassengers}
                        disabled={passengers === 1 ? true : false}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="join-bus-container">
                  <div className="bus-type" onClick={setBusFML}>
                    <img src="img/flm.png" alt="first-last-mile" />
                    <div className="bus-details">
                      <h4>First and Last Mile Bus</h4>
                      <h6>900-1200NGN</h6>
                    </div>
                  </div>
                  <div className="bus-type" onClick={setBusGIG}>
                    <img src="img/gig3.png" alt="first-last-mile" />
                    <div className="bus-details">
                      <h4>God is Good Bus</h4>
                      <h6>1400-1600NGN</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="btn-container">
              {step > 1 && (
                <button className="prev-btn" onClick={prevStep}>
                  previous
                </button>
              )}
              <button className="next-btn" onClick={nextStep}>
                next
              </button>
            </div>
          </div>
        )}

        {busType === "fml" && (
          <div className="bus-type-desc">
            <div className="img-desc">
              <img src="img/flm2.png" alt="flm" />
            </div>
            <div className="content-desc">
              <div>
                <h3>FLM Bus</h3>
                <h6>Available in 5 minutes</h6>
              </div>
              <div>
                <h3>NGN</h3>
                <h4>900-1200</h4>
              </div>
            </div>
            <p>7 seats, ideal for quick trips without luggage</p>
          </div>
        )}
        {busType === "gig" && (
          <div className="bus-type-desc">
            <div className="img-desc">
              <img src="img/gigm2.png" alt="Gigm" />
            </div>
            <div className="content-desc">
              <div>
                <h3>GIGM Bus</h3>
                <h6>Available in 5 minutes</h6>
              </div>
              <div>
                <h3>NGN</h3>
                <h4>1400-1600</h4>
              </div>
            </div>
            <p>Jet Mover, ideal for longer trips with heavy luggage</p>
          </div>
        )}
      </div>
    </Map>
  );
};

MyTrips.defaultProps = {
  center: {
    lat: 6.605874,
    lng: 3.349149
  },
  zoom: 15
};

export default MyTrips;
