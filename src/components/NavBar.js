import React from "react";
import { NavLink } from "react-router-dom";

const featureStyling = {
  background : 'green',
  color : 'white',
  padding : 1,
  margin : 1,
  display: "inline-block",
  textDecoration: "none"
}
function NavBar() {
  return(
    <div>
      <NavLink
      to='/'
      style={featureStyling}>Home</NavLink>

    <NavLink
      to='/movies'
      style={featureStyling}>Movies</NavLink>
    <NavLink
      to='/directors'
      style={featureStyling}>Directors</NavLink>
    <NavLink
      to='/actors'
      style={featureStyling}>Actors</NavLink>
    </div>
  )}

export default NavBar;
