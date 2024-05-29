import React from 'react'
import amamentacao from '../../assets/amamentacao.svg'
import gestacao_saudavel from '../../assets/gestacao_saudavel.png'
import apoio from '../../assets/apoio.png'
import sentimento from '../../assets/sentimento.svg'
import saudemental from '../../assets/saudemental.svg'
import bebe from '../../assets/bebe.svg'
import { Link } from 'react-router-dom'
import style from './BibliotecaComp.module.css'

const BibliotecaComp = () => {
    return (
    

         <section className= {style.bible}>
        
             <div>
                   <h1>Biblioteca</h1>
             </div>
                     <div id="divBusca">
                <h3>Procurar Por Categorias</h3>
                <input type="text" id="txtBusca" placeholder="Buscar..."/>
                <img src="../../assets/search.png" id="btnBusca" alt="Buscar"/>
                     </div>
             
                 <h2>Procurar Por Categoria</h2>
                 <button>Gravidez</button>
                 <button>Direitos</button>
                 <button>Aborto</button>
                 <button>Ser mãe</button>
             
                   <div>
                  <div className='linha'>
                   <h3>Gravidez</h3>
                   <hr className='linha-edicao' />
                  </div>
                   <a href="https://mulheregestacao.com.br/os-beneficios-e-a-importancia-da-amamentacao/</div>">
                   <img src= {amamentacao}  alt="" />
                   </a> 

                   <a href="https://www.scielo.br/j/csc/a/S4mtxM5F5K4bC4BRhdF6Bch/" >
                   <img src= {gestacao_saudavel}  alt="" />
                   </a> 

                   <a href="https://www.prosaude.org.br/vida-saudavel/a-importancia-da-rede-de-apoio-na-maternidade/">
                   <img src= {apoio}   alt="" />
                   </a> 

                   <div className='linha'>
                   <h3>Aborto</h3>
                   <hr className='linha-edicao' />
                  </div>

                   <a href="https://www.researchgate.net/publication/367102047_Aborto_espontaneo_percepcoes_e_sentimentos_das_mulheres">
                   <img src= {sentimento}  alt="" />
                   </a> 

                   <a href="https://www.academia.edu/99726373/SA%C3%9ADE_MENTAL_DA_MULHER_FRENTE_AO_ABORTO_ESPONT%C3%82NEO_uma_revis%C3%A3o_integrativa">
                   <img src=  {saudemental}   alt="" />
                   </a> 

                   <a href="https://www.mdsaude.com/gravidez/aborto-espontaneo/">
                   <img src= {bebe}   alt="" />
                   </a> 
                  </div>
         </section>

    )
    
    }
    
    export default BibliotecaComp;