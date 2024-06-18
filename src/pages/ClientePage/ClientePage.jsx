import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import './ClientePage.css';

export const ClientePage = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [servicoTipo, setServicoTipo] = useState('');
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [data, setData] = useState([]);

  const horarios = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  useEffect(() => {
    const loadAlgumaCoisa = async () => {
      const response = await fetch('http://localhost:3000/servicos');
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    loadAlgumaCoisa();
  }, []);

  const getServicoTipo = (event) => {
    setServicoTipo(event.target.value);
  };

  const getHorario = (event) => {
    setSelectedHorario(+event.target.value);
  };

  const horariosLivres = horarios.filter(
    (horario) =>
      !agendamentos.some((agendamento) => agendamento.horario === horario),
  );

  const handleAgendamento = () => {
    if (selectedHorario && servicoTipo) {
      setAgendamentos([
        ...agendamentos,
        { horario: selectedHorario, servico: servicoTipo },
      ]);
    } else {
      alert('Por favor, selecione um horário e um tipo de serviço.');
    }
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

      <div className="controle-agendamentos">
        <label htmlFor="tipo-servico">Escolha o serviço</label>
        <select name="tipo-servico" id="tipo-servico" onChange={getServicoTipo}>
          <option value="">Selecione um serviço</option>
          <option value="manicure">Manicure</option>
          <option value="designer">Designer</option>
        </select>

        <label htmlFor="hora">Escolha o horário</label>
        <select name="horario" id="horario" onChange={getHorario}>
          <option value="">Selecione um horário</option>
          {horariosLivres.map((horario) => (
            <option key={horario} value={horario}>
              {horario}
            </option>
          ))}
        </select>

        <button onClick={handleAgendamento}>Fazer agendamento</button>
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
          {agendamentos.map((agendamento, index) => (
            <p key={index}>
              Hora do atendimento: {agendamento.horario}, Serviço:
              {agendamento.servico}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};
