import React from 'react';
import { Form } from 'react-bootstrap';

const CategoryFilter = ({ setFilter}) => (
  
  <Form>
    <Form.Group controlId="categoryFilter">
      <Form.Label>Filter by Category</Form.Label>
      <Form.Control as="select" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>       
      </Form.Control>
     
    </Form.Group>
    {/* <Form.Control type="text" placeholder="filter by name" onChange={(e)=> setFilter(e.target.value)} /> */}
  </Form>
);

export default CategoryFilter;
