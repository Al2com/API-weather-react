import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken =
  'pk.eyJ1IjoiYXBpcHJveWVjdG8iLCJhIjoiY2w1aXNxcnlxMDhkcjNjbXhmaWhvN2hqbCJ9.0aI6_p6aaifHHsaCowhM5A';

async function getData(search) {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=6e266f9ea6524f13857716617f889692`,
    );
    const datos = await response.json();

    return datos;
  } catch (error) {
    console.error('error');
    window.alert("No se encuentran ")
  }
}
// https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=eng
function App() {
  const [datos, setData] = useState([]);
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(62.35);
  const [zoom, setZoom] = useState(3);



  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const searchValue = event.target.search.value;
    const data = await getData(searchValue);
    if (!data) {
      // maneja el error
      return;
    }
    setData(data);
    setLng(parseFloat(data.lon));
    setLat(parseFloat(data.lat));
    setData(parseFloat(setZoom));

    map.current.setCenter([data.lon, data.lat]);
  };

  // const shouldRender = Object.entries(datos).length > 0;
  // podemos omitir shoulRender si pasamos el object.entries(datos).length > 0 directamente al componente Main asi nos evitamos que no reconozca la constante
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng]);

  return (
    <>
      <Header />
      <Nav handleOnSubmit={handleOnSubmit} />
      <Main dato={datos} />  
       <div>
        <div ref={mapContainer} className="map-container" /> 
      </div> 

      {/* pasamos los datos al main que esta componetizado el valor data podria ser otro */}
    </>
  );
}
  
    
export default App;
// `${datos.data[0].weather.icon}`png; <img src="${datos.data[0].weather.icon.png}" alt=""/>
// hacer una funcion que compare o comvierta los numeros en imagen para que se vean los iconos
// poner esta parte de la app dentro del nav y crear otra
//hacer test

