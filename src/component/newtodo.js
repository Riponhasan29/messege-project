
 import React, { useContext, useState } from 'react';
 import { userContext } from './userContext';
 import {v4 as uuidv4} from 'uuid';
 import { useNavigate } from 'react-router-dom';

 const Newtodo = () => {

 const {dispatch}=useContext(userContext);
 const navigate=useNavigate();

 const [nam,setName]=useState('');
 const [dsc,setDsc]=useState('');

 const handle=(e)=>{
   e.preventDefault();
   const user={id:uuidv4(),name:nam,dsc};
   dispatch({type:'ADD',payload:user});
   navigate('Todo');
 }



   return (
     <div>
      <form action='' onSubmit={handle}>
        <input type='text' name='name' onChange={(e)=>{ setName(e.target.value)   }}/><br/>
        <input type='text' name='dsc' onChange={(e)=>{ setDsc(e.target.value)   }}/>
      <button type='submit'>submit</button>
      </form>
     </div>
   )
 }

 export  default Newtodo;
 