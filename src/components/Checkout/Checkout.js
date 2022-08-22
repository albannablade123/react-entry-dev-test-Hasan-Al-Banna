import React, { Component } from 'react';
import { CheckoutContainer, CartTitle } from '../../styles/Checkout.style';
import CheckoutCard from './CheckoutCard/CheckoutCard';

export default class Checkout extends Component {
  render() {
    return (
      <CheckoutContainer>
        <CartTitle>Cart</CartTitle>
        <hr/>
        <CheckoutCard/>
        <hr/>
        <CheckoutCard/>
        <hr/>
      </CheckoutContainer>
    )
  }
}
