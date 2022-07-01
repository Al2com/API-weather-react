git push origin cd ..cdimport { useEffect, useState } from "react";






const getCountries = async () => {
  try {
    const response = await fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=Guadasuar,ES&key=6e266f9ea6524f13857716617f889692"
    );
    const countries = await response.json();
    return countries;
  } catch (error) {
    throw error;
  }
};



 useEffect(() => {
   // Limpiando el efecto
   // Mas info https://es.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
   return () => {
     getCountry();
   };
 }, []);