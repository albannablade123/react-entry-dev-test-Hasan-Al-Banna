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
  ImageCartPreview
} from "../../../styles/Checkout.style";
import {
  ProductSpecificationTitle,
  CartButton,
  SelectionContainer,
  ButtonAttribute,
  ButtonColor1,
  ButtonColor2,
  ButtonColor3,
  PriceText,
} from "../../../styles/ProductItem.style";

export default class CheckoutCard extends Component {
  render() {
    return (
      <CardContainer>
        <LeftCardContainer>
          <ProductCartTitle>Apollo</ProductCartTitle>
          <ProductCartSubtitle>Running Short</ProductCartSubtitle>
          <PriceText>50.00$</PriceText>
          <ProductSpecificationTitle>Size:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonAttribute>XS</ButtonAttribute>
            <ButtonAttribute>S</ButtonAttribute>
            <ButtonAttribute>M</ButtonAttribute>
            <ButtonAttribute>L</ButtonAttribute>
          </SelectionContainer>
          <ProductSpecificationTitle>Color:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonColor1 />
            <ButtonColor2 />
            <ButtonColor3 />
          </SelectionContainer>
        </LeftCardContainer>

        <RightCardContainer>
          <CountContainer>
            <CountButton>+</CountButton>
            <CounterText>1</CounterText>
            <CountButton>-</CountButton>
          </CountContainer>
          <ImageCartPreview src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4"/>

        </RightCardContainer>
      </CardContainer>
    );
  }
}
