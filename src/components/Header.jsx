export const Header = () => {
  return (
    <><header>
      <h1>Weather-World-API</h1>

      <form onSubmit={handleOnSubmit}>
        <label htmlFor="search">Elige una ciudad:</label>
        <input type="search" name="search" id="search" />
        <button type="submit">Buscar</button>
      </form>
    </header><main>
        {shouldRender ? (

          <h1>Ciudad: {datos.city_name}</h1>
          // <dl>
          //   <dd>{datos.data[0].weather.${icon}}</dd>
          // </dl>
          ,
          // <dl>
          //   <dd>{datos.data[0].weather.${icon}}</dd>
          // </dl>
          <dl>
            <dt>Temperatura</dt>
            <dd>{datos.data[0].temp}</dd>
          </dl>

        ) : (
          <h2>no hay data</h2>)}
      </main></>
    
  );
}
 

