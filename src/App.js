import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { useNavigate } from "react-router";

import {Routes, Route } from "react-router-dom";
import Register from './Forms/Register';
import Login from './Forms/Login';
import Dashboard from './Dashboard/Dashboard';
const App = () => {
  const navigate = useNavigate()
  const data =useSelector((state)=>state.auth_store.is_login);
console.log(data);
  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
},[data])

  return (

   
 <div className="App">
  
    <Routes>
    <Route path="/" element={<Register/>} />
    <Route  path="login" element={<Login/>} />
    <Route  path="dashboard" element={<Dashboard/>} />

    </Routes>
    
   
  
   
 
 </div>

   
   
  );
};


export default App;
