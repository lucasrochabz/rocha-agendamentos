import { useState } from 'react';
import './Register.css';

export const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    senha: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const printDados = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="create-user">
        <div className="register-content">
          <h2>Rocha Agendamentos</h2>
          <p>
            A Rocha Agendamentos ajuda você a se conectar com seu profissional
            favorito.
          </p>
        </div>
        <form className="create-user-form">
          <h2>Cadastre-se</h2>
          <p>É rápido e fácil.</p>

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="nome"
            value={formData.nome}
            onChange={handleFormChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="email"
            value={formData.email}
            onChange={handleFormChange}
          />

          <label htmlFor="celular">Celular</label>
          <input
            type="text"
            id="celular"
            name="celular"
            className="celular"
            value={formData.celular}
            onChange={handleFormChange}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleFormChange}
          />

          <button
            className="btn-register"
            id="btn-register"
            onClick={printDados}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </>
  );
};
