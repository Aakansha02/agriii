import React from 'react';

const ProductsGallery = () => {
  const products = [
    {
      id: 1,
      name: 'Tractor',
      image: 'C:\Users\mishr\agriii\agriii\src\images\slider1.jpg',
      price: '$50/day',
    },
    {
      id: 2,
      name: 'Plow',
      image: 'path/to/plow.jpg',
      price: '$20/day',
    },
    {
      id: 3,
      name: 'Harvester',
      image: 'path/to/harvester.jpg',
      price: '$80/day',
    },
    {
      id: 4,
      name: 'Cultivator',
      image: 'path/to/harvester.jpg',
      price: '$100/day',
    }
    // Add more product objects as needed
  ];

  return (
    <section className="products-gallery"><h1>FEATURED PRODUCTS</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="rent-button">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGallery;
