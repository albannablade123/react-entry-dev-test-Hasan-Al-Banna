import React, { Component } from "react";
import {
  CardContainer,
  LeftCardContainer,
  ProductCartTitle,
  ProductCartSubtitle,
  RightCardContainer,
  CountButton,
  CountContainer,
  CounterText,
  ImageCartPreview,
  ButtonImage,
} from "../../../styles/Checkout.style";
import {
  ProductSpecificationTitle,
  SelectionContainer,
  ButtonAttribute,
  ButtonColor1,
  PriceText,
} from "../../../styles/ProductItem.style";

export default class CheckoutCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }

  handleImageNext = () => {
    
    if (this.state.imageIndex >= this.props.product.gallery.length - 1){
      return
    }
    else{
      this.setState((prevState, props) => ({ imageIndex: prevState.imageIndex + 1 }));

    }
  }

  handleImagePrevious = () => {
    if (this.state.imageIndex == 0) {
      return;
    } else {
      this.setState(
        this.setState((prevState, props) => ({ imageIndex: prevState.imageIndex - 1 }))
      );
    }
  }

  getPriceValue() {
    let priceValue = this.props.product.prices.find(
      (o) => o.currency.symbol === this.props.currency.symbol
    );
    return priceValue.amount;
  }

  render() {
    console.log(this.state);
    return (
      <CardContainer>
        <LeftCardContainer>
          <ProductCartTitle>{this.props.product.brand}</ProductCartTitle>
          <ProductCartSubtitle>{this.props.product.name}</ProductCartSubtitle>
          <PriceText>
            {this.getPriceValue()}
            {this.props.currency.symbol}
          </PriceText>
          {this.props.product.attributes.map((attributeItem, outsideIndex) => {
            return attributeItem.name === "Color" ? (
              <div>
                <ProductSpecificationTitle id={attributeItem.id}>
                  {attributeItem.name.toUpperCase()}
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
                          this.props.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "1px"
                            : "0px",
                        border:
                          this.props.product?.selectedAttributes[outsideIndex]
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
                          this.props.product.id,
                          choiceItem,
                          outsideIndex,
                          index
                        )
                      }
                      style={{
                        backgroundColor:
                          this.props.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "#1D1F22"
                            : "white",
                        color:
                          this.props.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "white"
                            : "#1D1F22",
                      }}
                    >
                      {choiceItem.displayValue}
                    </ButtonAttribute>
                  ))}
                </SelectionContainer>
              </div>
            );
          })}
        </LeftCardContainer>

        <RightCardContainer>
          <CountContainer>
            <CountButton
              onClick={() => {
                this.props.handleIncrementProductQuantity(
                  this.props.product.quantity,
                  this.props.product.id
                );
              }}
            >
              +
            </CountButton>
            <CounterText>{this.props.product.quantity}</CounterText>
            <CountButton
              onClick={() => {
                this.props.handleDecrementProductQuantity(
                  this.props.product.quantity,
                  this.props.product.id
                );
              }}
            >
              -
            </CountButton>
          </CountContainer>
          <ImageCartPreview>
            <img
              src={this.props.product.gallery[this.state.imageIndex]}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />

            <ButtonImage
              style={{ right: "8%", top: "85%" }}
              onClick={this.handleImageNext}
            >
              {`>`}
            </ButtonImage>

            <ButtonImage
              style={{ right: "23%", top: "85%" }}
              onClick={this.handleImagePrevious}
            >
              {`<`}
            </ButtonImage>
          </ImageCartPreview>
        </RightCardContainer>
      </CardContainer>
    );
  }
}
