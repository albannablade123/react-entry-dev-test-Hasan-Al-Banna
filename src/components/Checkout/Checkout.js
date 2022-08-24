import React, { Component } from 'react';
import { CheckoutContainer, CartTitle } from '../../styles/Checkout.style';
import CheckoutCard from './CheckoutCard/CheckoutCard';

export default class Checkout extends Component {
  
  render() {
    console.log(this.props)
    return (
      <CheckoutContainer>
        <CartTitle>Cart</CartTitle>
        <hr/>
        {this.props.cart.map(product => {
          <>
          <CheckoutCard product={product}/>
          <hr/>
          </>
        })}
        
        <CheckoutCard/>
        <hr/>
        <CheckoutCard/>
        <hr/>
      </CheckoutContainer>
    )
  }
}
