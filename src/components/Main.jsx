import React from "react";


const Main = (props) => {
  console.log(props)
  return (
    <main>
      {Object.entries(props.dato).length > 0 ? (
        <>
          <h2>Ciudad : {props.dato.city_name}  {props.dato.country_code}</h2>
          <img
            src={`./assets/icons/${props.dato.data[0].weather.icon}.png`}
            alt="imagen"
          ></img>
          <dl>
            <dt>Temperatura</dt>
            <dd>{props.dato.data[0].temp} ºC</dd>

            <dd>{props.dato.lon}</dd>
          </dl>
        </>
      ) : (
        <h2>No existen datos de esta localización</h2>
      )}
    </main>
  );
};

export default Main;
