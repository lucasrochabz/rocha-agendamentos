import { Header } from '../../components/Header/Header';
import './AdminPage.css';

export const AdminPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <aside className="sidebar">
          <h2>Barra lateral</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </aside>
        <main>Teste de conteúdo principal</main>
      </div>
    </>
  );
};
