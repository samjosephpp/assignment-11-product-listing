import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productsData from './data/products.json';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/App.css"

function App() {
  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(productsData);  
  const [filter , setFilter] = useState('');
  const filteredProducts = filter 
    ? products.filter(product => product.category === filter)
    : products;
  
 
    const categ = [];
     function initializeCategory() {
       products.forEach(item => { categ.push(item.category); });
       console.log(categ);
    };
     initializeCategory();

  return (
    <>
    <Container>
      <h1>Product Listing</h1>
      <CategoryFilter setFilter={setFilter}  />   
      <hr />    
      <ProductList products={filteredProducts} />
    </Container>
     {/* <div className="container">
      <CategoryFilter setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </div> */}
      {/* <Container>
        <h1>Products</h1>
        <Row>
          { products.map( (product,index) => {
            return(
             <p> {index+1} . {product.title}</p>
            );
          } ) }
        </Row>
      </Container> */}
      
    </>
  )
}

export default App
