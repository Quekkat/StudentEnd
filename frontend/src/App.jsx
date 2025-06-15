import { useState } from 'react'

import {useStore} from "./GlobalVariables";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes  from './ProtectedRoutes';
import MainPage from './MainPage';
import Login from './Widgets/Login'
import Signup from './Widgets/Signup';

function App() {
  const {authUser} = useStore();
  return (
    <div>
      <Routes>
        <Route path="/login" element ={!authUser? <Login/>: <Navigate to="/"/>} />
        <Route path="/signup" element={!authUser ? <Signup/> : <Navigate to="/"/>}/>
        
        <Route element ={<ProtectedRoutes/>}>
          <Route element ={<MainPage/>} path="/"/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
