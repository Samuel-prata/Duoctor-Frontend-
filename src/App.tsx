
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
import ListagemCategoria from './components/categoria/listagemCategoria/ListagemCategoria'
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import CadastroProdutos from './components/produtos/cadastroProdutos/CadastroProdutos';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListagemProdutos from './components/produtos/listagemProdutos/ListagemProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import Perfil from './pages/perfil/Perfil';






function App() {

   return (
      <Provider store={store}>
         <ToastContainer />
         <BrowserRouter>

            <Navbar />

            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/home' element={<Home />} />
               <Route path='/perfil' element={<Perfil />} />
               <Route path='/entrar' element={<Login />} />
               <Route path='/sobre' element={<Sobre />} />
               <Route path='/cadastro' element={<CadastroUsuario />} />
               <Route path='/categorias' element={<ListagemCategoria />} />
               <Route path='/formularioCategoria' element={<CadastroCategoria />} />
               <Route path='/formularioCategoria/:id' element={<CadastroCategoria />} />
               <Route path='/deletarCategoria' element={<DeletarCategoria />} />
               <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />
               <Route path='/formularioProduto' element={<CadastroProdutos />} />
               <Route path='/produtos' element={<ListagemProdutos />} />
               <Route path='/formularioProduto/:id' element={<CadastroProdutos />} />
               <Route path='/deletarProduto' element={<DeletarProdutos />} />
               <Route path='/deletarProduto/:id' element={<DeletarProdutos />} />

            </Routes>

            <Footer />

         </BrowserRouter>
      </Provider>
   );
}

export default App
