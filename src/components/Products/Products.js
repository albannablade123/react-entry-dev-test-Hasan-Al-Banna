import React, { Component } from 'react'

import { CategoryTitle, ProductsContainer, GridContainer } from '../../styles/Products.style.js';
import ProductCard from './Product/ProductCard.js';
import { Link, useLocation } from 'react-router-dom';

export default class Products extends Component {
  render() {
    return (
            <ProductsContainer>
            <CategoryTitle>{this.props.category}</CategoryTitle>
            <GridContainer>
              {
                this.props.products.map((product,index)=>(
                  <Link to={`product/${product.id}`} key={product.id}>
                  <ProductCard 
                  Component={Link}
                  to={`/product/${product.id}`}
                  key={product.id} 
                  name={product.name} 
                  image={product.displayImage} 
                  price={product.price}
                  inStock={product.inStock}
                  currency={this.props.currency}
                  />
                  
                  </Link>
                  
                )
                )
              }
            </GridContainer>
            </ProductsContainer>
    )
  }
}
