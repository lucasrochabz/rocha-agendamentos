import { useState } from 'react';
import { Register } from '../Register/Register';
import './Login.css';

export const Login = () => {
  const [openModal, setOpenModal] = useState(false);

  const [loginForm, setLoginForm] = useState({
    emailLogin: '',
    senhaLogin: '',
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleEnter = async (event) => {
    event.preventDefault();
    console.log(loginForm);

    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const email = loginForm.emailLogin;
    const senha = loginForm.senhaLogin;

    const usuarioEncontrado = users.find(
      (user) => user.email === email && user.senha === senha,
    );

    if (usuarioEncontrado) {
      alert('Você está logado!');
      console.log('Email e senha encontrados', usuarioEncontrado);
      return true;
    } else {
      alert('Dados incorretos');
      console.log('Email ou senha incorretos');
      return false;
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <section className="login-container">
        <div className="register-content">
          <h2>Rocha Agendamentos</h2>
          <p>
            A Rocha Agendamentos ajuda você a se conectar com seu profissional
            favorito.
          </p>
        </div>

        <form className="login-form" onSubmit={handleEnter}>
          <label htmlFor="emailLogin">Email</label>
          <input
            type="text"
            id="emailLogin"
            name="emailLogin"
            placeholder="Email"
            value={loginForm.emailLogin}
            onChange={handleForm}
          />

          <label htmlFor="senhaLogin">Senha</label>
          <input
            type="password"
            id="senhaLogin"
            name="senhaLogin"
            placeholder="Senha"
            value={loginForm.nome}
            onChange={handleForm}
          />

          <button type="submit" className="btnEnter">
            Entrar
          </button>

          <button
            type="button"
            className="btn-open-register"
            onClick={handleOpenModal}
          >
            Registre-se
          </button>
        </form>
      </section>
      {openModal && <Register closeModal={() => setOpenModal(false)} />}
    </>
  );
};
