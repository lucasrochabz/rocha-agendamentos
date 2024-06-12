import { useState } from 'react';
import './Login.css';

export const Login = () => {
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
      </form>
    </>
  );
};
