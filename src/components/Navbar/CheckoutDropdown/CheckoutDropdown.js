import React, { Component } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "./CheckoutDropdowntItem";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CartContentContainer,
  CartDropdownTitle,
  DropdownButtonContainer,
  DropdownButton,
  TotalContainer,
  TotalHeader,
  TotalCount,
  CartContentContainerEmpty,
} from "../../../styles/Checkout.style";


export default class CheckoutDropdown extends Component {
  render() {
    return (
      <CartDropdownContainer onMouseLeave={() => {this.props.handleCloseCartNavbar()}}>
        <CartContentContainer
        >
          <div style={{ display: "flex", marginBottom: "32px", height: "26px"}}>
            <CartDropdownTitle>My Bag, <b>{this.props.cart.length} items{" "}</b> </CartDropdownTitle>
          </div>
          {this.props.cart.length > 0 ? (
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
          ) : (
            <CartContentContainerEmpty>
              <h3>Cart is empty, start adding items</h3>
            </CartContentContainerEmpty>
          )}
        </CartContentContainer>

        <TotalContainer>
          <TotalHeader>Total</TotalHeader>
          <TotalCount>
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
              cursor: "pointer",
            }}
          >
            VIEW BAG
          </DropdownButton>
          <Link to={"checkout"} style={{ textDecoration: "none" }} >
            <DropdownButton
            onClick={() => {this.props.handleCloseCartNavbar()}}
              style={{
                cursor: "pointer",
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
