import React, { useState } from "react";
import Header from './components/Header';


const getData = async (search) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=6e266f9ea6524f13857716617f889692`
    );
    const datos = await response.json();
    return datos
  } catch (error) {
    console.error(error);
  }
};
// https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=eng
function App() {
  const [datos, setData] = useState([]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // const {
    //   target: {
    //     search: { value: searchValue },
    //   },
    // } = event;

    const searchValue = event.target.search.value;
    const data = await getData(searchValue);
    setData(data);
  };

  const shouldRender = Object.entries(datos).length > 0;
  




  return (
    <>
      <Header />
    
      <nav>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="search">Elige una ciudad:</label>
          <input type="search" name="search" id="search" />
          <button type="submit">Buscar</button>
        </form>
      </nav>

      <main>
        {shouldRender ? (
          <>
            <h1>Ciudad: {datos.city_name}</h1>

            <img
              src={`./assets/icons/${datos.data[0].weather.icon}.png`}
              alt=""
            ></img>

            <dl>
              <dt>Temperatura</dt>
              <dd>{datos.data[0].temp} ºC</dd>
              <dd>{datos.data[0].datetime}</dd>
            </dl>
          </>
        ) : (
          <h2>no hay data</h2>
        )}
      </main>
    </>
  );
}

export default App;
// `${datos.data[0].weather.icon}`png; <img src="${datos.data[0].weather.icon.png}" alt=""/>
// hacer una funcion que compare o comvierta los numeros en imagen para que se vean los iconos 
// poner esta parte de la app dentro del nav y crear otra 
//hacer test