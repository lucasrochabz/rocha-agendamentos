import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Register } from '../../components/Register/Register';
import './HomePage.css';

export const HomePage = () => {
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

  return (
    <>
      <Header />
      <main>
        <form className="formulario" onSubmit={handleEnter}>
          <label htmlFor="emailLogin">Email</label>
          <input
            type="text"
            id="emailLogin"
            name="emailLogin"
            value={loginForm.emailLogin}
            onChange={handleForm}
          />

          <label htmlFor="senhaLogin">Senha</label>
          <input
            type="password"
            id="senhaLogin"
            name="senhaLogin"
            value={loginForm.nome}
            onChange={handleForm}
          />

          <button type="submit" className="btnEnter">
            Entrar
          </button>
        </form>
      </main>

      <Register />
    </>
  );
};
