
 import React, { useContext } from 'react';
 import { userContext } from './userContext';
 import { Link } from 'react-router-dom';
 const Tod = ({todo}) => {

 const {dispatch}=useContext(userContext);
//  const Navigat=useNavigate();
 const string=(str,num)=>{
  if(str.length>num){
    const strr=str.slice(0,num);
    return strr;
  }else{
    return str;
  }
 }
  const name=todo.name;
  const dsc=todo.dsc;

   return (
     <div>
      <h1>{name}<button onClick={()=>{dispatch({type:'REMOVE',payload:todo.id})}}>Remove</button> </h1>   
      <h2>{string(dsc,50)}</h2>   
         <Link to={name} state={{name,dsc}}>Learn more....</Link>
      </div>
   )
 }
 

 export default Tod;
