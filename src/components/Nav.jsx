import React  from "react";

const Nav = (props) => {
  return (
  <form onSubmit={props.handleOnSubmit}>
    <label htmlFor="search">Elige una ciudad:</label>
    <input type="search" name="search" id="search" />
    <button type="submit">Buscar</button>
  </form>
  )
};

export default Nav;
