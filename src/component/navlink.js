
 import React, { Fragment } from 'react';
 import { NavLink } from 'react-router-dom';
 
 export const Navbar = () => {
   return (
     <Fragment>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Todo'>Todo</NavLink>
        <NavLink to='*'>Error</NavLink>
     </Fragment>
   )
 }
 