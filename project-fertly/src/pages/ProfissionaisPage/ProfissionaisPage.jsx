import React from "react";
import Navbar from "../../components/Navbar";
import Profissionais from "../../components/Profissionais";
import Footer from "../../components/Footer";
import style from "./ProfissionaisPage.module.css"
import medica from "../img/medica.svg"
import {Link} from 'react-router-dom'

const ProfissionaisPg = () => {
    return (

        <section className={style.conteiner}>
        <div className= {style.conteinerTop}>
            <div className= {style.containerText}>
            <div >
                <p className={style.titulo1}>Nossos profissionais</p>
                <p className={style.tituloCustomizado}><span className={style.textoCor}>Cuidando</span> de você,<br />
                 cuidando do <span className={style.textoCor}>futuro</span>. </p>
            </div>
             <div className={style.conteinerTextBottom}>
                 <p>O <span className={style.textoCor}>Fertly</span> te proporciona atendimento on-line e com profissionais qualificados.</p>
                 </div>
             </div>
            <div className={style.conteiner}>
              <img src={medica} alt="Médica e paciênte" width={550} height={450} />
            </div>
        </div>


            <div className={style.conteinerContactar}>
   
             <div>
                 <h2 className={style.tituloProfissionais}>Nossos profissionais</h2>
                     <select className={style.personalizarSelect}>
                         <option>Especialidades</option>
                         <option value="Advogados">Advogados</option>
                         <option value="Doulas">Doulas</option>
                         <option value="Fisioterapeutas">Fisioterapeutas</option>
                         <option value="Psicólogos">Psicólogos</option>
                     </select>
                  <div>
            </div>
                
                <section className={style.perfisProf}>

                    <div className={style.perfisProfum}>
                         <h2>Advogada  -  Jaqueline Nascimento</h2>
                        <button className={style.buttonmenos}><Link to='/Perfil'><p>Contactar</p></Link></button>
  
                    </div>
                    
                    <div className={style.perfisProfdois} >
                         <h2>Doula  - Júlia Fernandes</h2>
                         <button className={style.buttonmenos} >Contactar</button>
                     </div>
                    <div className={style.perfisProftres} >
                         <h2>Fisioterapeuta  - Larissa  Silva</h2>
                         <button className={style.buttonmenos} type="submit">Contactar</button>
                     </div>
                     <div className={style.perfisProfquatro} >
                         <h2>Psicóloga  -  Vitória Radassa</h2>
                         <button className={style.buttonmenos} type="submit">Contactar</button>
                     </div>
                     <div>
                     <button className={style.buttonmais}>Ver mais</button>
                     </div>
                     </section>
           </div>
         </div>
         
               
                </section>
                
    )
}


export default ProfissionaisPg;
