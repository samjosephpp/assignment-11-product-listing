import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => (
  <Card>
    <Card.Img variant="top" src={product.image} className='productImg' />
    <Card.Body className='productBody'>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>Price: ${product.price}</Card.Text>
      <Card.Text>Category: {product.category}</Card.Text>
      {/* <Button variant='primary'>Add to card</Button> */}
    </Card.Body>
  </Card>
);

export default ProductCard;
