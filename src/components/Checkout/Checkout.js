import React, { Component } from "react";
import {
  CheckoutContainer,
  CartTitle,
  CheckoutTotalContainer,
  CheckoutTotalTextNormal,
  CheckoutTotalTextDiv,
  CheckoutButton,
} from "../../styles/Checkout.style";
import CheckoutCard from "./CheckoutCard";

export default class Checkout extends Component {
  render() {
    return (
      <CheckoutContainer>
        <CartTitle>Cart</CartTitle>
        <hr />
        {this.props.cart.map((product, index) => (
          <>
            <CheckoutCard
              product={product}
              currency={this.props.currency}
              handleDecrementProductQuantity={
                this.props.handleDecrementProductQuantity
              }
              key={index}
              handleIncrementProductQuantity={
                this.props.handleIncrementProductQuantity
              }
              handleChangeSelectedAttribute={
                this.props.handleChangeSelectedAttribute
              }
            />
            <hr />
          </>
        ))}
        <CheckoutTotalContainer>
          <CheckoutTotalTextDiv>
            <CheckoutTotalTextNormal>
              Tax 21%: &nbsp;&nbsp;
              <b>
                {(this.props.getTotal() * 0.21).toFixed(2)}
                {this.props.currency.symbol}
              </b>
            </CheckoutTotalTextNormal>
          </CheckoutTotalTextDiv>

          <CheckoutTotalTextDiv>
            <CheckoutTotalTextNormal>
              Quantity:&nbsp;&nbsp;
              <b>{this.props.getTotalQuantity()}</b>
            </CheckoutTotalTextNormal>
          </CheckoutTotalTextDiv>

          <CheckoutTotalTextDiv>
            <CheckoutTotalTextNormal>
              Total: &nbsp;&nbsp;
              <b>
                {this.props.getTotal()}
                {this.props.currency.symbol}
              </b>
            </CheckoutTotalTextNormal>
          </CheckoutTotalTextDiv>
          <CheckoutButton>Order</CheckoutButton>
        </CheckoutTotalContainer>
      </CheckoutContainer>
    );
  }
}
