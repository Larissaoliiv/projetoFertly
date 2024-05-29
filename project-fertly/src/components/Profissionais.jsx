import medica from '../assets/rectangle.svg';
import style from '../components/Profissionais.module.css'

const ProfissionaisPg = () => {

    <section className={style.principal}>
        <h1>Nossos profissionais</h1>
        <div>
            <h2><strong>Cuidando</strong> de você,
                cuidando do <strong>futuro.</strong> </h2>
        </div>
        <h1>O <strong>Fertly</strong> te proporciona atendimento on-line e com profissionais qualificados.</h1>
        <div className={style.conteiner}>
            <img src={medica.svg} alt="Médica e paciênte" />
        </div>


        <section className={Contactar}>
            <h2>Nossos profissionais</h2>
            <select>
                <option>Profissionais</option>
                <option value="Advogados">Advogados</option>
                <option value="Doulas">Doulas</option>
                <option value="Fisioterapeutas">Fisioterapeutas</option>
                <option value="Psicólogos">Psicólogos</option>
            </select>

            <div className={style.perfisProf} >
                <div className={style.perfisProfum}>
                    <h2>Advogada  -  Jaqueline Nascimento</h2>
                    <button type="submit">Contactar</button>
                </div>
                <div className={style.perfisProfdois} >
                    <h2>Doula  - Júlia Fernandes</h2>
                    <button type="submit">Contactar</button>
                </div>
                <div className={style.perfisProftres} >
                    <h2>Fisioterapeuta  - Larissa  Silva</h2>
                    <button type="submit">Contactar</button>
                </div>
                <div className={style.perfisProfquatro} >
                    <h2>Psicóloga  -  Vitória Radassa</h2>
                    <button type="submit">Contactar</button>
                </div>
            </div>

            <button>Ver mais</button>
        </section>
    </section>;
}

export default ProfissionaisPg;