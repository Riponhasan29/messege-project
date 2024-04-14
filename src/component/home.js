
 import React, { Fragment, useReducer } from 'react';
 import Newtodo from './newtodo';
 import { userContext } from './userContext';
 import { initialState } from '../reducer/initialState';
 import { reducer } from '../reducer/reducer';
 import Todo from './todo';
 import {BrowserRouter, Route, Routes} from 'react-router-dom';
 import { Error } from './error';
 import { Navbar } from './navlink';
 import { Dsc } from './dsc';
//  import { Locatioon } from './location';

 const Home = () => {

 const [state,dispatch]=useReducer(reducer,initialState)

   return (
    <Fragment>
     <userContext.Provider value={{state,dispatch}} >
     <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element={<Newtodo />} />
       <Route path='/Todo' element={<Todo />} />
       <Route path='*' element={<Error />} />
       <Route path='/Todo/:name' element={<Dsc />} />
       {/* <Route path='/Todo/:name' element={<Locatioon />} /> */}
      </Routes>
     </BrowserRouter>
     </userContext.Provider>
     </Fragment>
   )
 }
 
 export default Home;




