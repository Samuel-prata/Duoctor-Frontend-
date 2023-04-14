import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importar as functions
import Navbar from './static/navbar/Navbar'
import Footer from './static/footer/Footer'
import Home from './pages/home/Inicio'
import Login from './pages/login/Login'
//imports necessários
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre'
import Inicio from './pages/home/Inicio'
import './App.css'


function App() {
   return (
      <>
         <BrowserRouter>

            <Navbar />

            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/entrar' element={<Login />} />
               <Route path='/inicio' element={<Inicio />} />
               <Route path='/sobre' element={<Sobre />} />
            </Routes>

            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App
