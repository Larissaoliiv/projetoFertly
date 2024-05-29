import React from 'react';
import style from './Home.module.css'
import HomeGravida from '../img/homeGravida.svg'
import Advogada from '../../assets/advogando.png'
import Fisio from '../../assets/exercicio.png'
import Psicologia from '../../assets/lendo.png'
import ImgFundo from '../../assets/fundo.svg'
import Doula from '../../assets/doula.png'
import {Link} from 'react-router-dom'
import logoPage from '../../assets/logoPage.png'
import amamentacao from '../../assets/amamentacao.svg'
import gestacao_saudavel from '../../assets/gestacao_saudavel.jpg'
import apoio from '../../assets/apoio.png'
// import Pss from '../../'

const Home = () => {
  return (

    <div className={style.center}>
        <div className={style.img_Fundo}>
          <img src={ImgFundo} alt="" />
        </div>
      <div className={style.header_container}>
        <div className={style.left_column}>
          <div className={style.text_one}>
            <p>Feito para você</p>
            <h1>Soluções que simplificam!</h1>
          </div>
          <div className={style.text_two}>
            <h2> <span>•</span> Site para o seu conhecimento</h2>
            <h2> <span>•</span> Faça sua consulta.</h2>
          </div>
          {/* <button><Link to='/register'>Quero Ser fertly</Link></button> */}
        </div>
        <div className={style.right_column}>
          <img src={HomeGravida} alt="Grávida" />
        </div>
      </div>

      <section className={style.service}>
        <h1>Conheça Nosso Serviços</h1>
        <p>Empoderar mulheres através da saúde e conhecimento de direitos
          <br />promovendo igualdade e autonomia </p>
      </section>

      <section className={style.section_one}>
        <div className={style.img_advocacy}>
          <img src={Advogada} alt="advogada" />
        </div>
        <div className={style.text_advocacy}>
          <h2>Assessoria Jurídica</h2>
          <p>
          Garanta seus direitos durante a gravidez com a assessoria jurídica especializada. Nossa equipe oferece suporte completo em questões trabalhistas, incluindo licença maternidade e estabilidade no emprego. Além disso, fornecemos orientação sobre auxílio maternidade e assistência legal em casos de aborto ou carência no plano de saúde para o parto. Conte com nossa expertise para proteger seus direitos e tomar decisões informadas durante esse período especial.
          </p>
          <button>Agendar</button>
        </div>
      </section>

      <section className={style.section_two}>
        <div className={style.text_psychology}>
          <h2 h2>Consulta psicológica</h2>
          <p>Oferecemos consultas online com uma psicóloga especializada para proporcionar o apoio necessário durante a gestação, ajudando você a compreender seus sentimentos. Em caso de aborto, nossa equipe auxilia no processo de luto, garantindo acompanhamento emocional personalizado.</p>
          <button>Agendar</button>
        </div>
        <div className={style.img_psychology}>
          <img src={Psicologia} alt="Psicologa" />
        </div>
      </section>

      <section className={style.section_three}>
        <div className={style.img_physiotherapy}>
          <img src={Fisio} alt="" />
        </div>
        <div className={style.text_physiotherapy}>
          <h2>Consulta Fisioterapêutica</h2>
          <p>Os benefícios da fisioterapia durante a gestação. Alívio de dores, fortalecimento muscular e melhoria da postura são apenas alguns dos resultados. Prepare-se para o parto e recupere-se pós-parto com exercícios personalizados.
          Consulte um fisioterapeuta especializado para obter os melhores cuidados para você e seu bebê.</p>
          <button>Agendar</button>
        </div>
      </section>

      <section className={style.section_four}>
        <div className={style.text_doula}>
        <h2>Doula</h2>
        <p>Esses profissionais capacitados estão ao seu lado durante a gestação, parto e pós-parto. Saiba como uma doula pode tornar sua experiência de maternidade mais segura e empoderada. Te dando um suporte em todos os momentos.</p>
        <button>Agendar</button>
        </div>
        <div className={style.img_doula}>
          <img src={Doula} alt="" />
        </div>
      </section>
      <section>
      {/* <div className={style.ondaImg}>
        <img src={onda} alt='Onda'/>
        </div> */}
          <div className={style.frente}>
            <h1 className={style.Frenteh1}>Sobre Nós</h1>
            <img className={style.FrenteImg} src= {logoPage} alt="Logo"/>
            <p className={style.Frenteparagrafo}>Somos um projeto dedicado a oferecer conhecimento, cuidados de saúde e apoio médico para mulheres grávidas, tentantes e aquelas que enfrentaram perdas. Nosso objetivo é capacitar você com informações confiáveis e uma comunidade solidária para navegar com confiança pela jornada da maternidade.
                Faça parte do FERTLY, onde você não está sozinha.</p>
          </div> 
      </section>
      <section className={style.Pfrequentes}>
      <h1 className={style.faq} >Dúvidas Frequentes</h1>
        <details className={style.detalhe}>
            <summary>É Seguro?</summary>
            <p>Sim! Somos uma site consolidado, que oferece proteção aos seus dados, trabalhamos com profissionais íntegros, para poder executar esse trabalho. Oferecemos todo suporte ao usuário. Trabalhos com sistema de avaliação de atendimento, e ouvidoria de reclamações por e-mail.</p>
        </details>

        <details className={style.detalhe}>
            <summary>Como faço para criar uma conta?</summary>
            <p> Clique em Cadastro e preencha as informações solicitadas.</p>
        </details>

        <details className={style.detalhe}>
            <summary>Como são feitas as consultas?</summary>
            <p> As consultas são realizadas em horário agendado, por vídeo chamada, ligação telefônica ou via chat, por WhatsApp mesmo.</p>
        </details>

        <details className={style.detalhe}>
            <summary>Quais são os termos de serviço ou uso do site?</summary>
            <p>Os termos de uso, também conhecidos como termos e condições do site, estabelecem a relação entre os visitantes e o website.  Este documento se assemelha a um contrato entre o site o usuário, que define os direitos e responsabilidades de quem usa o site.</p>
        </details>
      </section>
      
      
          
          <section>
                <div className= {style.replica}> 
                    <div className={style.tituloB}><h3>Biblioteca</h3><hr /> </div>
                    <div className={style.imagemReplica}> 
                    <div className={style.replica1}>
                         <img src= {amamentacao}  alt=""  width={400}/>
                          <a href="https://mulheregestacao.com.br/os-beneficios-e-a-importancia-da-amamentacao/</div>">
                           Os beneficios e a importância da amamentação
                          </a>
                    </div>
                     <div className={style.replica2}>
                       <img src= {gestacao_saudavel}  alt="" width={400}/>
                         <a href="https://www.scielo.br/j/csc/a/S4mtxM5F5K4bC4BRhdF6Bch/" >
                          Gestante saudável
                         </a>
                     </div>
                     <div className={style.replica3} >
                         <img src= {apoio}   alt=""  width={400}/>
                         <a href="https://www.prosaude.org.br/vida-saudavel/a-importancia-da-rede-de-apoio-na-maternidade/">
                         A importância da rede de apoio na gestação
                         </a>
                        
                     </div>
                    </div>
                  </div>
          </section>

     
      
    </div>
  );
}

export default Home;
