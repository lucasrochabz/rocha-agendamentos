import { Header } from '../../components/Header/Header';
import './HorariosPage.css';

export const HorariosPage = () => {
  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const agendamentos = [9, 12, 13];

  const horariosLivres = horarios.filter(
    (horario) => !agendamentos.includes(horario),
  );

  return (
    <>
      <Header />
      <div className="horarios">
        <h3>Horários Disponíveis</h3>
        {horariosLivres.map((horario) => (
          <p key={horario}>Horario livre: {horario}</p>
        ))}
      </div>
      <div className="agendamento">
        <h3>Agendados</h3>
        {agendamentos.map((agendamento) => (
          <p key={agendamento}>Hora do atendimento: {agendamento}</p>
        ))}
      </div>
    </>
  );
};
