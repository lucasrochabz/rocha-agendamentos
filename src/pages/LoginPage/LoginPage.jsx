import './LoginPage.css';

export const LoginPage = () => {
  return (
    <>
      <h2>Cadastre-se</h2>
      <p>É rápido e fácil. ref width 432</p>

      <div className="create-user">
        <form className="create-user-form">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="nome" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="email" />

          <label htmlFor="celular">Celular</label>
          <input type="text" id="celular" className="celular" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="senha" />

          <button className="btn-register" id="btn-register">
            Cadastre-se
          </button>
        </form>
      </div>
    </>
  );
};
