import React, { Component } from 'react';
import { CheckoutContainer, CartTitle, CartDropdownContainer } from '../../styles/Checkout.style';

export default class CheckoutDropdown extends Component {
  render() {
    return (
      <CartDropdownContainer>
        <h1>My Bag</h1>
      </CartDropdownContainer>
    )
  }
}
