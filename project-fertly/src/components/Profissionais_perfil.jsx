import '../components/Profissionais_perfil.css'

const Profissionais_perfil = () => {
return (
<section className={style.perfil}>
  <img src="https://discordapp.com/channels/1210639399847723081/1210639400405573688/1244470161986289768" alt="Mulher sorrindo" />
     <div className="Nome_perfil">
           <h2>Dr. Jaqueline Nascimento </h2>
    </div>
    <div className={style.perfil_advogada}>
        <p>Advogada</p>
    </div>
        <h2>Sobre</h2>
           <p>Sou uma advogada de 31 anos, resido atualmente em Recife - Pe. Trabalho com diferentes campos do direito, como o direito contratual, condominial, do consumidor, civil, defesas, recursos judiciais e com elaboração de pareceres jurídicos. Estou sempre disponível para trocar ideias e experiências. Sinta-se à vontade para me mandar uma mensagem.</p>
              <h2>Formação profissional</h2>
                 <p>Formação Profissional:

                    Bacharelado em Direito
                    Universidade Federal de Pernambuco,  Recife-PE
                    Período de Estudo: [2011 / 2016]

                    Cursos Complementares:

                    - Curso Avançado em Direito Civil
                    - Instituição: [JurisAcademy]
                    - Duração: [8 meses]

                    - Curso de Direito Processual Civil
                    - Instituição: [JurisAcademy]
                    - Duração: [1 mês]

                    - Curso de Atualização em Legislação Trabalhista
                    - Instituição: [JurisAcademy]
                    - Duração: [4 meses]

                    - Curso de Direito de Família e Sucessões
                    - Instituição: [JurisAcademy]
                    - Duração: [3 semanas]
</p>
   <h2>Essa formação sólida reflete meu compromisso contínuo com a excelência profissional e meu desejo de oferecer os melhores serviços jurídicos aos meus clientes.</h2>
   <button type="button">Agendar</button>

</section>

)

}

export default Profissionais_perfil;