import React, { Component } from "react";
import {
  CartDropdownTitle,
  CartDropdownCard,
  CartCardLeftContainer,
  CartProductTitle,
  CartProductPrice,
  CountDropdownContainer,
  CountDropdownButton,
  CounterDropdownText,
  ProductDropdownImage

} from "../../styles/Checkout.style";
import CheckoutCard from "./CheckoutCard/CheckoutCard";

export default class CheckoutItem extends Component {
  render() {
    return (
      <CartDropdownCard>
        <CartCardLeftContainer>
          <CartProductTitle>Apollo</CartProductTitle>
          <CartProductTitle>Running Short</CartProductTitle>
          <CartProductPrice>$50.00</CartProductPrice>
        </CartCardLeftContainer>
        <CountDropdownContainer>
            <CountDropdownButton>+</CountDropdownButton>
            <CounterDropdownText>1</CounterDropdownText>
            <CountDropdownButton>-</CountDropdownButton>
          </CountDropdownContainer>
          <ProductDropdownImage src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4"/>
      </CartDropdownCard>
    );
  }
}
