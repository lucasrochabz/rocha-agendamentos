import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList/ProductList';
import './ClientePage.css';

export const ClientePage = () => {
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
      {/* <ProductList /> */}
      <button onClick={handleAgendamento}>Fazer agendamento</button>
    </>
  );
};
