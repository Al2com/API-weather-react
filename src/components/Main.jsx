import React from "react";


const Main = (props) => {

  return (
    <main>
      {Object.entries(props.dato).length > 0 ? (
        <>
          <h2>
            Ciudad : {props.dato.city_name} {props.dato.country_code}
          </h2>
          <img
            src={`./assets/icons/${props.dato.data[0].weather.icon}.png`}
            alt="imagen"
          ></img>
          <dl className="datemp">
            <div class="temp">
              <dt>Temperatura {props.dato.data[0].temp} ºC </dt>
            </div>
            <h6 className="lon">Lon:{props.dato.lat}</h6>
            <h6 className="lat">Lat:{props.dato.lon}</h6>
          </dl>
        </>
      ) : (
        <h2>No existen datos de esta localización</h2>
      )}
    </main>
  );
};

export default Main;
