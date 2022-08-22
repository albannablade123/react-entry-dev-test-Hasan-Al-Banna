import React, { Component } from "react";
import {
  ProductItemContainer,
  ImageGrid,
  ImagePreview,
  ImageContainer,
  ProductItemContent,
  ProductTitle,
  ProductSubtitle,
  ProductSpecificationTitle,
  CartButton,
  SelectionContainer,
  ButtonSize,
  ButtonColor1,
  ButtonColor2,
  ButtonColor3,
  PriceText
} from "../../../styles/ProductItem.style";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedImage: "https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4",
    };
  }

  

  render() {
    return (
      <ProductItemContainer>
        <ImageGrid>
          <ImagePreview src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4" />
          <ImagePreview src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4" />
          <ImagePreview src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4" />
          <ImagePreview src="https://i.scdn.co/image/ab67616d0000b273d57c54675dee2618421c98c4" />
        </ImageGrid>
        <ImageContainer src={this.state.displayedImage} />
        <ProductItemContent>
          <ProductTitle>Apollo</ProductTitle>
          <ProductSubtitle>Running Short</ProductSubtitle>
          <ProductSpecificationTitle>Size:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonSize>XS</ButtonSize>
            <ButtonSize>S</ButtonSize>
            <ButtonSize>M</ButtonSize>
            <ButtonSize>L</ButtonSize>
          </SelectionContainer>
          <ProductSpecificationTitle>Color:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonColor1/>
            <ButtonColor2/>
            <ButtonColor3/>
          </SelectionContainer>
          <ProductSpecificationTitle>Price:</ProductSpecificationTitle>
          <PriceText>50.00$</PriceText>
          <CartButton>Add To Cart</CartButton>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quam facilis labore ad maxime libero temporibus quae dignissimos
            numquam molestiae placeat suscipit beatae aut voluptas, ipsam
            exercitationem dolorum, sed qui.
          </p>
        </ProductItemContent>
      </ProductItemContainer>
    );
  }
}
