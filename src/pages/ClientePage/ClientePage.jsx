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
      <ProductList />
      <button onClick={handleAgendamento}>Fazer agendamento</button>
    </>
  );
};
