import './Register.css';

export const Register = () => {
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
