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
  ProductDropdownImage,
  ProductSpecificationTitle,
  SelectionContainer,
  ButtonAttribute,
  ButtonColor1,
} from "../../styles/Checkout.style";
import CheckoutCard from "./CheckoutCard/CheckoutCard";

export default class CheckoutItem extends Component {
  getPriceValue() {
    let priceValue = this.props.cartItem.prices.find(
      (o) => o.currency.symbol === this.props.currency.symbol
    );
    return priceValue.amount;
  }

  render() {
    console.log(this.props)
    return (
      <CartDropdownCard>
        <CartCardLeftContainer>
          <CartProductTitle>{this.props.cartItem.brand}</CartProductTitle>
          <CartProductTitle>{this.props.cartItem.name}</CartProductTitle>
          <CartProductPrice>
            {this.props.currency.symbol}
            {this.getPriceValue()}
          </CartProductPrice>
          {this.props.cartItem.attributes.map((attributeItem, outsideIndex) => {
            return attributeItem.name === "Color" ? (
              <div>
                <ProductSpecificationTitle id={attributeItem.id}>
                  {attributeItem.name}
                </ProductSpecificationTitle>
                <SelectionContainer>
                  {attributeItem.items.map((choiceItem, index) => (
                    <ButtonColor1
                    onClick={() =>
                      this.props.handleChangeSelectedAttribute(
                        this.props.product.id,
                        choiceItem,
                        outsideIndex,
                        index
                      )
                    }
                      id={choiceItem.id}
                      style={{
                        cursor: "pointer",
                        backgroundColor: choiceItem.value,
                        borderWidth:
                          this.props.cartItem?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "1px"
                            : "0px",
                        border:
                          this.props.cartItem?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "2px solid #5ECE7B"
                            : "#1D1F22",
                      }}
                    />
                  ))}
                </SelectionContainer>
              </div>
            ) : (
              <div>
                <ProductSpecificationTitle id={attributeItem.id}>
                  {attributeItem.name.toUpperCase()}
                </ProductSpecificationTitle>
                <SelectionContainer>
                  {attributeItem.items.map((choiceItem, index) => (
                    <ButtonAttribute
                      id={choiceItem.id}
                      onClick={() =>
                        this.props.handleChangeSelectedAttribute(
                          this.props.cartItem.id,
                          choiceItem,
                          outsideIndex,
                          index
                        )
                      }
                      style={{
                        backgroundColor:
                          this.props.cartItem?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "#1D1F22"
                            : "white",
                        color:
                          this.props.cartItem?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "white"
                            : "#1D1F22",
                      }}
                    >
                      {choiceItem.value}
                    </ButtonAttribute>
                  ))}
                </SelectionContainer>
              </div>
            );
          })}
        </CartCardLeftContainer>
        <CountDropdownContainer>
          <CountDropdownButton
            onClick={() => {
              this.props.handleIncrementProductQuantity(
                this.props.cartItem.quantity,
                this.props.cartItem.id
              );
            }}
          >
            +
          </CountDropdownButton>
          <CounterDropdownText>
            {this.props.cartItem.quantity}
          </CounterDropdownText>
          <CountDropdownButton onClick={() => {
              this.props.handleDecrementProductQuantity(
                this.props.cartItem.quantity,
                this.props.cartItem.id
              );
            }}>-</CountDropdownButton>
        </CountDropdownContainer>
        <ProductDropdownImage src={this.props.cartItem.displayedImage} />
      </CartDropdownCard>
    );
  }
}
