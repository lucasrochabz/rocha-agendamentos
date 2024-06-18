import { useState } from 'react';
import './Register.css';

export const Register = ({ closeModal }) => {
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

  const printDados = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  };

  return (
    <>
      <div className="create-user">
        <form className="create-user-form">
          <button type="button" onClick={closeModal}>
            Fechar Modal
          </button>
          <h2>Cadastre-se</h2>
          <p>É rápido e fácil.</p>

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleFormChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />

          <label htmlFor="celular">Celular</label>
          <input
            type="text"
            id="celular"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleFormChange}
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
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
