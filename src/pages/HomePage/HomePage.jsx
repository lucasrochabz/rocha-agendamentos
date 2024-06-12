import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import './HomePage.css';
import { Register } from '../../components/Register/Register';

export const HomePage = () => {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleEnter = (event) => {
    event.preventDefault();
    console.log(`${nome} entrou`);
  };

  const handleExit = (event) => {
    event.preventDefault();

    console.log(`${nome} saiu`);
  };

  return (
    <>
      <Header />
      <main>
        <form className="formulario">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" onChange={handleChange} />

          <button type="button" className="btnEnter" onClick={handleEnter}>
            Entrar
          </button>
          <button type="button" className="btnExit" onClick={handleExit}>
            Sair
          </button>
        </form>
      </main>

      <Register />
    </>
  );
};
