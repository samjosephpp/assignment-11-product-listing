import React from 'react';
import ProductCard from './ProductCard';
import {  Container,  Row, Col } from 'react-bootstrap';
 

const ProductList = ({ products }) => (
  <Row>
    {products.map(product => (
      <Col key={product.id}  xs = {12} sm={6} md={4} lg={4} xl={3} xxl={3}>
        <ProductCard product={product} />
      </Col>
    ))}
  </Row>
);

export default ProductList;
