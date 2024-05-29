import React from "react";
import Navbar from "../../components/Navbar";
import Profissionais_perfil from "../../components/Profissionais_perfil";
import Footer from "../../components/Footer";
import perfil_advogada from "../../assets/perfil_advogada.png"
import style from '../../pages/Perfil/Perfil.module.css';

const Perfil = () => {
   return (
  
       <section className={style.sessao}>
        <div className={style.Nome_perfil}>
       <img className={style.perfil_advogada} src={perfil_advogada} alt="Mulher sorrindo" />
               <div className={style.estruturaPerfil}> <h2>Dr. Jaqueline Nascimento </h2>
                <p className={style.ProfissaoPerfil}>Advogada</p>
                </div>
                <br />
         </div>
             <h2>Sobre</h2>
             <br />
                <p>Sou uma advogada de 31 anos, resido atualmente em Recife - Pe. Trabalho com diferentes campos do direito, <br />como o direito contratual, condominial, do consumidor, civil, defesas, recursos judiciais e com elaboração de pareceres jurídicos. <br /> Estou sempre disponível para trocar ideias e experiências. Sinta-se à vontade para me mandar uma mensagem.</p>
                  <br />
                   <h2>Formação profissional</h2>
                   <br />
                      <p>Formação Profissional:
                       <br />
                         Bacharelado em Direito
                         Universidade Federal de Pernambuco,  Recife-PE
                         Período de Estudo: [2011 / 2016]
                         </p>
                         <p>Cursos Complementares:</p>
                         <br />
                       <p>
                         - Curso Avançado em Direito Civil
                         - Instituição: [JurisAcademy]
                         - Duração: [8 meses]
                         <br />
                       </p>
                         <p>
                         - Curso de Direito Processual Civil
                         - Instituição: [JurisAcademy]
                         - Duração: [1 mês]
                          <br />
                        </p> 
                       <p>
                         - Curso de Atualização em Legislação Trabalhista
                         - Instituição: [JurisAcademy]
                         - Duração: [4 meses] 
                         <br />
                       </p>
                       <p>
                         - Curso de Direito de Família e Sucessões
                         - Instituição: [JurisAcademy]
                         - Duração: [3 semanas]
                       </p>
                       <br />
           <div className={style.textoFormacao}>
             <h3>Essa formação sólida reflete meu compromisso contínuo com a excelência profissional <br /> e meu desejo de oferecer os melhores serviços jurídicos aos meus clientes.</h3>
           </div>
          <button className= {style.botaoAgendar} type="button">Agendar</button>
     
         </section>
     
     )

   }

    export default Perfil



