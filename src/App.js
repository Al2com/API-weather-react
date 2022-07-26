import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


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
function App() {
  const [datos, setData] = useState([]);
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(62.35);
  const [zoom, setZoom] = useState(6);



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
        <footer class="footer">
          <h5>Álvaro Comenge made with ❤ 26/7/22</h5>
        </footer>
      </div>

      {/* pasamos los datos al main que esta componetizado el valor data podria ser otro */}
    </>
  );
}
  
    
export default App;


