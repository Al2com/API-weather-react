import React from "react";
import mapboxgl  from "mapbox-gl"; 
// Hay que importar mapbox para que el componente funcione además del token
mapboxgl.accessToken =
  'pk.eyJ1IjoiYXBpcHJveWVjdG8iLCJhIjoiY2w1aXNxcnlxMDhkcjNjbXhmaWhvN2hqbCJ9.0aI6_p6aaifHHsaCowhM5A';




const Map = (props) => {
return(
<div>
  <div ref={props.mapContainer} className="map-container" />
  <footer className="footer">
      <h5>Álvaro Comenge made with ❤ 26/7/22</h5>
      <h6>Proyecto final de curso General Assambly</h6>
  </footer>
</div>

)};

export default Map;
