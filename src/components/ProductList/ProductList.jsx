import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
  return (
    <>
      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};
