import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList/ProductList';
import './ClientePage.css';

export const ClientePage = () => {
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const agendamentos = [9, 12, 13, 14, 8];

  const horariosLivres = horarios.filter(
    (horario) => !agendamentos.includes(horario),
  );

  const handleAgendamento = () => {
    console.log('clicou em Fazer Agendamento');
  };

  return (
    <>
      <Header />

      <div className="servicos">
        <div className="servicos-item">
          <h3>Manicure</h3>
        </div>
        <div className="servicos-item">
          <h3>Designer de sobrancelha</h3>
        </div>
      </div>

      <section className="calendario">
        <div className="calendario-item">
          <h3>Horários Disponíveis</h3>
          {horariosLivres.map((horario) => (
            <p key={horario}>Horario livre: {horario}</p>
          ))}
        </div>

        <div className="calendario-item">
          <h3>Agendados</h3>
          {agendamentos.map((agendamento) => (
            <p key={agendamento}>Hora do atendimento: {agendamento}</p>
          ))}
        </div>
      </section>

      {/* <ProductList /> */}

      <button onClick={handleAgendamento}>Fazer agendamento</button>
    </>
  );
};
