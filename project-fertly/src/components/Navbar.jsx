import React from 'react'
import IconeLogo from '../assets/logo.svg'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.logo_column}>
        <Link to='/'><img src={IconeLogo} alt="Logo" /></Link>
      </div>
      <nav className={style.navbar}>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/ProfissionaisPage'>Profissionais</Link>
          </li>
          <li>
          <Link to='/BibliotecaPage'>Biblioteca</Link>
          </li>
        </ul>
      </nav>
      <div className={style.buttons_column}>
        <Link to='/login'>Entrar</Link>
        <Link to='/register'>Cadastar</Link>
      </div>
    </header>
  );
}

export default Navbar