import React, { Fragment }  from "react";


const Main = (props) => {
  return (
  
    <main>
      {props.shouldRender ? (
        <>
          <h1>Ciudad: {props.datos.city_name}</h1>
      
          <img
            src={`./assets/icons/${props.datos.data[0].weather.icon}.png`}
            alt=""
          ></img>

          <dl>
            <dt>Temperatura</dt>
            <dd>{props.datos.data[0].temp} ºC</dd>
            <dd>{props.datos.data[0].datetime}</dd>
          </dl>
        </>
      ) : (
        <h2>no hay data</h2>
      )}
      </main>
   
  );
};

export default Main;
