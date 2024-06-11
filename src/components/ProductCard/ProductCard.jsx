import './ProductCard.css';

export const ProductCard = () => {
  const handleCard = () => {
    console.log('clicou no Card');
  };

  return (
    <>
      <div className="product-card" onClick={handleCard}>
        <p>Nome</p>
        <p>Serviço</p>
        <p>Horário</p>
        <p>Preço</p>
      </div>
    </>
  );
};
