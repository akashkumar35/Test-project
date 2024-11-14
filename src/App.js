
import './App.css';


import {Routes, Route } from "react-router-dom";
import Register from './Forms/Register';
import Login from './Forms/Login';
import Dashboard from './Dashboard/Dashboard';
const App = () => {
 
 
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
