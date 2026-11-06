import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../data/products";

export default function ProductDetail() {
    const { id } = useParams();
    const product = useMemo(() => getProductById(id), [id]);

    if (!product) {
        return (
            <main className="page">
                <div className="container">
                    <h1 className="page-title">Product not found</h1>
                    <Link to="/" className="btn btn-secondary">Back to products</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        <p className="product-detail-price">${product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
