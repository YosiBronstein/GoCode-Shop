import React from "react";
import Product from "../Product/Product";
import "./Products.css"

export default function Products({products}) {
  return (
    <section className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </section>
  );
}
