import React from 'react';
import { useLocation } from 'react-router-dom';

export const Locatioon = () => {
 const location=useLocation();

  return (
    <div>{location.state.name}
    <h3> {location.state.dsc}</h3>
 </div>
   
  )
}
