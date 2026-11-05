import { getProducts } from "../data/products";
import ProductCard from "../component/ProductCard";

export default function Home() {
    const products = getProducts();
    return (
        <div className="home">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopMate</h1>
                <p className="home-subtitle">Your one-stop shop for all your needs!</p>
            </div>
            <div className="home-container">
                <h2 className="page-title">Featured Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}