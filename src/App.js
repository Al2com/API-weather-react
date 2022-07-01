import React,{useEffect, useState} from "react";

const getData = async () => {
  try {
    const response = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Guadasuar,ES&key=6e266f9ea6524f13857716617f889692');
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}
// https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=eng
function App() {
  const [datos, setData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getData();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
  fetchData ()

}, []  )
  


  return (
    <>
    <header>
      <h1>Weather-World-API</h1>
      </header>
    </>
  );}

export default App;
