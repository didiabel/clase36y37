import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserProvider from './store/context';
import Inicio from './components/Inicio'
import Voley from './components/voley';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Futbol from './components/Futbol/Futbol';
import Tenis from './components/Tenis/Tenis';

function App() {


  return (
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/voley' element={<Voley/>}/>
          <Route path='/futbol' element={<Futbol/>}/>
          <Route path='/tenis' element={<Tenis/>}/>
        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;
