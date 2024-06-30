// src/Products/Image.js
import React from 'react';
import product from '../Products/product';

const Image = () => {
  return <img src={product.image} alt={product.name} style={{ width: '20%', height: 'auto' }} />;
};

export default Image;
