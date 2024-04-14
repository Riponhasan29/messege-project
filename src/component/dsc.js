
 import React from 'react';
 import { useParams } from 'react-router-dom';
 import { useContext } from 'react';
 import { userContext } from './userContext';
 export const Dsc = () => {

 const {state,dispatch}=useContext(userContext);
 const {name}=useParams();

 const filterName=state.users.filter((user)=>user.name==name);

   return (
     <div>{name}
     <h3> {filterName[0].dsc}</h3>
  </div>
    
   )
 }
 