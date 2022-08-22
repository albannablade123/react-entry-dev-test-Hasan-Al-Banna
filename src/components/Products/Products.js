import React, { Component } from 'react'

import { CategoryTitle, ProductsContainer, GridContainer } from '../../styles/Products.style.js';
import ProductCard from './Product/ProductCard.js';

export default class Products extends Component {
  render() {
    return (
            <ProductsContainer>
            <CategoryTitle>{this.props.category}</CategoryTitle>
            <GridContainer>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </GridContainer>
            </ProductsContainer>
    )
  }
}
