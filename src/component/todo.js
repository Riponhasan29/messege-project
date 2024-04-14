
 import React,{useContext} from 'react';
 import Tod from './tod';
 import { userContext } from './userContext';
 
 const Todo = () => {

 const {state}=useContext(userContext);
 const usersCopy = [...state.users];
 const userss=usersCopy.sort((a,b)=> a.name.localeCompare(b.name));


   return (
     <div>
     {userss.map((todos)=>{return <Tod key={todos.id} todo={todos} /> })}
     </div>
   )
 }
 
 export default Todo;
