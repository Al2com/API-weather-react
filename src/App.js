import React, { useEffect, useState } from "react";

const getData = async (search) => {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=6e266f9ea6524f13857716617f889692`
    );
    const datos = await response.json();
    return datos;
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
      <header>
        <h1>Weather-World-API</h1>

        <form onSubmit={handleOnSubmit}>
          <label htmlFor="search">Busqueda por ciudad:</label>
          <input type="search" name="search" id="search" />
          <button type="submit">Busqueda</button>
        </form>
      </header>
      <main>
        {shouldRender ? (
          <>
            <h2>Ciudad: {datos.city_name}</h2>
            <dl>
              <dt>Temperatura</dt>
              <dd>{datos.data[0].temp}</dd>
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
