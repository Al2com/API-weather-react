import React, { useState } from "react";
import Header from './components/Header';
import Nav from "./components/Nav";
import Main from "./components/Main";




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

  // const shouldRender = Object.entries(datos).length > 0;
  

 


  return (
    <>
      <Header />
      <Nav handleOnSubmit={handleOnSubmit} />
      <Main dato={datos} />
    </>
  );
}

export default App;
// `${datos.data[0].weather.icon}`png; <img src="${datos.data[0].weather.icon.png}" alt=""/>
// hacer una funcion que compare o comvierta los numeros en imagen para que se vean los iconos 
// poner esta parte de la app dentro del nav y crear otra 
//hacer test