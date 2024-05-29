import React from "react";
import style from '../../pages/BibliotecaPage/Biblioteca.module.css';
import amamentacao from '../../assets/amamentacao.svg'
import gestacao_saudavel from '../../assets/gestacao_saudavel.jpg'
import apoio from '../../assets/apoio.png'
import sentimento from '../../assets/sentimento.svg'
import saudemental from '../../assets/saudemental.svg'
import bebe from '../../assets/bebe.svg'
import { Link } from 'react-router-dom'
import search from '../../assets/search.png'

const BibliotecaComp = () => {
    return (
    

         <section className= {style.bible}>
        
             <div>
                   <h2>Biblioteca</h2>
             </div>
                     <div className={style.busca}>
                
                <input type="text" id="txtBusca" placeholder="Buscar..."/>
                <div className={style.iconInput}>
                    <img src= {search} id="btnBusca" alt="Buscar"width={20}/>
                </div>
                     </div>
                 
                 <div className= {style.bot}>
                 <button>Gravidez</button>
                 <button>Direitos</button>
                 <button>Aborto</button>
                 <button>Ser mãe</button>
                 </div>
             
                  

                
              <div className= {style.conteiner}>
                  <div className= {style.tituloBiblioteca}><h3>Gravidez</h3><hr /> </div>
                  <div className={style.imagens}>
                  <div className={style.conteinerCard}>
                       <img src= {amamentacao}  alt="" />
                        <a href="https://mulheregestacao.com.br/os-beneficios-e-a-importancia-da-amamentacao/</div>">
                         Os beneficios e a importância da amamentação
                        </a>
                  </div>

                   <div className={style.conteinerCard}>
                     <img src= {gestacao_saudavel}  alt="" width={300}/>
                       <a href="https://www.scielo.br/j/csc/a/S4mtxM5F5K4bC4BRhdF6Bch/" >
                        Gestante saudável
                       </a>
                   </div>
                   <div className={style.conteinerCard} >
                       <img src= {apoio}   alt="" />  
                       <a href="https://www.prosaude.org.br/vida-saudavel/a-importancia-da-rede-de-apoio-na-maternidade/">
                       A importância da rede de apoio na gestação
                       </a>
                   </div>
               </div>
         </div>
              
               <div className= {style.conteiner}>
                   <div className= {style.tituloBiblioteca}><h3>Aborto</h3><hr /> </div>
               <div className={style.imagens}>
                   <div className={style.conteinerCard}>
                       <img src= {sentimento}  alt="" />
                       <a href="https://www.researchgate.net/publication/367102047_Aborto_espontaneo_percepcoes_e_sentimentos_das_mulheres">
                        Aborto espontâneo: percepções e sentimentos das mulheres
                       </a>
                   </div>
                   <div className={style.conteinerCard}>
                       <img src=  {saudemental}   alt="" />
                       <a href="https://www.academia.edu/99726373/SA%C3%9ADE_MENTAL_DA_MULHER_FRENTE_AO_ABORTO_ESPONT%C3%82NEO_uma_revis%C3%A3o_integrativa">
                       Saúde mental da mulher frente ao aborto...
                       </a>
                   </div>
                   <div className={style.conteinerCard}>
                       <img src= {bebe}   alt="" />
                       <a href="https://www.mdsaude.com/gravidez/aborto-espontaneo/">
                       Fatores associados ao aborto espontâneo
                       </a>
                   </div>
               </div>
               </div>
         </section>

    )
    
    }
    
    export default BibliotecaComp;