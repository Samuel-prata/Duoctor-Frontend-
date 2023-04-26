import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importar as functions
import Navbar from './static/navbar/Navbar'
import Footer from './static/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
//imports necessários
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre'
import './App.css'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import DeletarProdutos from './assets/components/produtos/deletarProdutos/DeletarProdutos'



function App() {
   return (
      <>
         <BrowserRouter>

            <Navbar />

            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/entrar' element={<Login />} />
               <Route path='/home' element={<Home/>}  />
               <Route path='/sobre' element={<Sobre />} />
               <Route path='/cadastro' element={<CadastroUsuario />} />
               <Route path='/deletarProduto' element={<DeletarProdutos />} />

            </Routes>

            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App
