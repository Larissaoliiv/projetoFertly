import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Perfil from './pages/Perfil/Perfil'
import ProfissionaisPage from './pages/ProfissionaisPage/ProfissionaisPage'
import BibliotecaPage from './pages/BibliotecaPage/Biblioteca'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
         <Route path='/Perfil' element={<Perfil/>}/> 
         <Route path='/ProfissionaisPage' element={<ProfissionaisPage />}/> 
         <Route path='/BibliotecaPage' element={<BibliotecaPage/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
