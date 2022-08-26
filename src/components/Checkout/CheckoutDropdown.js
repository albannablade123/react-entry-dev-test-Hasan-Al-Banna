import React, { Component } from "react";
import {
  CheckoutContainer,
  CartTitle,
  CartDropdownContainer,
  CartItemsContainer,
  CartContentContainer,
  CartDropdownTitle,
  DropdownButtonContainer,
  DropdownButton,
  TotalContainer,
  TotalHeader,
  TotalCount,
} from "../../styles/Checkout.style";
import CheckoutItem from "./CheckoutItem";
import { Link, useLocation } from "react-router-dom";
export default class CheckoutDropdown extends Component {
  render() {
    
    return (
      <CartDropdownContainer>
        <CartContentContainer>
          <div style={{ display: "flex" }}>
            <CartDropdownTitle>My Bag, </CartDropdownTitle>
            <CartDropdownTitle style={{ fontWeight: "300" }}>
              {this.props.cart.length} items{" "}
            </CartDropdownTitle>
          </div>

          <CartItemsContainer>
            {this.props.cart.map((item, index) => (
              <CheckoutItem
                handleDecrementProductQuantity={
                  this.props.handleDecrementProductQuantity
                }
                handleChangeSelectedAttribute={
                  this.props.handleChangeSelectedAttribute
                }
                handleIncrementProductQuantity={
                  this.props.handleIncrementProductQuantity
                }
                key={index}
                cartItem={item}
                currency={this.props.currency}
              />
            ))}
          </CartItemsContainer>
        </CartContentContainer>
        <TotalContainer>
          <TotalHeader>Total</TotalHeader>
          <TotalCount style={{ textAlign: "right" }}>
            {this.props.getTotal()}
            {this.props.currency.symbol}
          </TotalCount>
        </TotalContainer>
        <DropdownButtonContainer>
          <DropdownButton
            style={{
              marginRight: "12px",
              backgroundColor: "white",
              border: "2px solid #1D1F22",
            }}
          >
            VIEW BAG
          </DropdownButton>
          <Link to={"checkout"} style={{ textDecoration: "none" }}>
            <DropdownButton
              style={{
                marginRight: "12px",
                backgroundColor: "#5ECE7B",
                border: "2px solid #5ECE7B",
                color: "white",
              }}
            >
              CHECKOUT
            </DropdownButton>
          </Link>
        </DropdownButtonContainer>
      </CartDropdownContainer>
    );
  }
}
