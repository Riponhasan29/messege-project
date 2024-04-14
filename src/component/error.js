 
  import React, { Fragment } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  export const Error = () => {

   const Navigat=useNavigate();

    return (
     <Fragment >
        <h1>
            404 Not Found Error.......
        </h1>
       <button onClick={()=>{Navigat('/')}}>Goto Home</button>
     </Fragment>
        
    )
  }
  