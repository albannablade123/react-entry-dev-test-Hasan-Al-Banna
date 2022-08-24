import React, { Component } from "react";
import {
  CheckoutContainer,
  CartTitle,
  CartDropdownContainer,
  CartItemsContainer,
  CartContentContainer,
  CartDropdownTitle,
  DropdownButtonContainer,
  DropdownButton
} from "../../styles/Checkout.style";
import CheckoutItem from "./CheckoutItem";
export default class CheckoutDropdown extends Component {
  render() {
    return (
      <CartDropdownContainer>
        <CartContentContainer>
          <div style={{ display: "flex" }}>
            <CartDropdownTitle>My Bag</CartDropdownTitle>
          </div>

          <CartItemsContainer>
            <CheckoutItem />
            <CheckoutItem />
          </CartItemsContainer>
        </CartContentContainer>
        <DropdownButtonContainer>
          <DropdownButton style={{
            marginRight: "12px",
            backgroundColor: "white",
            border: "2px solid #1D1F22",
          }}>
          VIEW BAG
          </DropdownButton>
          <DropdownButton style={{
            marginRight: "12px",
            backgroundColor:"#5ECE7B",
            border: "2px solid #5ECE7B",
            color: "white",
          }}>
          CHECKOUT
          </DropdownButton>
        </DropdownButtonContainer>
      </CartDropdownContainer>
    );
  }
}
