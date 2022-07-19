import React, { useRef, useEffect, useState } from "react";
import Header from './components/Header';
import Nav from "./components/Nav";
import Main from "./components/Main";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

  mapboxgl.accessToken ='pk.eyJ1IjoiYXBpcHJveWVjdG8iLCJhIjoiY2w1aXNxcnlxMDhkcjNjbXhmaWhvN2hqbCJ9.0aI6_p6aaifHHsaCowhM5A';





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
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(34);

  const [lat, setLat] = useState(22.35);
  const [zoom, setZoom] = useState(5);

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
    setLng(data.lon);
    console.log(lng);
    setLat(parseFloat(data.lat));
    {
      const marker1 = new mapboxgl.Marker()
        .setLngLat([-0.37739, 39.46975])
        .addTo(map);
    }
  };;

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
  
  useEffect(() => {
    if (datos.length > 0)  {
      map.current.on("data", () => {
        map.current.getCenter().lng.toFixed(lng);
        map.current.getCenter().lat.toFixed(lat);
      })
    } 
  })
  
  
  
   
  

  
 

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