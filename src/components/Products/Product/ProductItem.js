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
  ButtonAttribute,
  ButtonAttributeColor,
  ButtonSelected,
  PriceText,
  ProductDescriptionContainer,
} from "../../../styles/ProductItem.style";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { GET_PRODUCT_BY_ID } from "../../../GraphQl/Queries";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

import { onError } from "@apollo/client/link/error";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql errors ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: "",
        name: "",
        description: "",
        gallery: [],
        prices: [],
        attributes: [],
        displayedImage: "",
        quantity: 0,
        selectedAttributes: [],
      },
    };
  }

  componentDidMount() {
    let { id } = this.props.params;

    client
      .query({
        query: GET_PRODUCT_BY_ID,
        variables: { id: id },
      })
      .then((result) =>
        this.setState({
          product: {
            id: result.data.product.id,
            name: result.data.product.name,
            prices: result.data.product.prices,
            gallery: result.data.product.gallery,
            displayedImage: result.data.product.gallery[0],
            description: result.data.product.description,
            attributes: result.data.product.attributes,
            brand: result.data.product.brand,
            selectedAttributes: [],
            quantity: 0,
          },
        })
      );
  }

  handleChangeDisplayImage = (newImage) => {
    this.setState({
      product: {
        ...this.state.product,
        displayedImage: newImage,
      },
    });
  };

  getPriceValue() {
    let priceValue = this.state?.product?.prices?.find(
      (o) => o.currency.symbol === this.props.currency.symbol
    );
    return priceValue?.amount;
  }

  setInitialAttribute() {
    if (!this.state.product.attributes) {
      return;
    } else {
      let temporaryAttributesArray = [];

      this.state.product.attributes.forEach((Element) => {
        temporaryAttributesArray.push(Element.items[0]);
      });
      this.setState({
        product: {
          ...this.state.product,
          selectedAttributes: temporaryAttributesArray,
        },
      });
    }
  }

  componentDidUpdate(previousProps, prevState) {
    if (prevState.product !== this.state.product) {
      if (prevState.product.attributes !== this.state.product.attributes)
        this.setInitialAttribute();
    }
  }

  handleChangeProductSelectedAttribute(index, newAttribute) {
    let newAttributeArray = [...this.state.product.selectedAttributes];
    newAttributeArray[index] = newAttribute;

    this.setState({
      product: {
        ...this.state.product,
        selectedAttributes: newAttributeArray,
      },
    });
  }

  render() {
    return (
      <ProductItemContainer>
        <ImageGrid>
          {this.state.product.gallery.map((item, index) => (
            <ImagePreview
              key={index}
              src={item}
              onClick={() => {
                this.handleChangeDisplayImage(item, index);
              }}
            />
          ))}
        </ImageGrid>
        <ImageContainer src={this.state.product.displayedImage} />
        <ProductItemContent>
          <ProductTitle>{this.state.product.name}</ProductTitle>
          <ProductSubtitle>Running Short</ProductSubtitle>
          {this.state.product.attributes.map((attributeItem, outsideIndex) => {
            return attributeItem.name === "Color" ? (
              <div key={outsideIndex}>
                <ProductSpecificationTitle id={attributeItem.id}>
                  {attributeItem.name.toUpperCase()}
                </ProductSpecificationTitle>
                <SelectionContainer>
                  {attributeItem.items.map((choiceItem, index) => (
                    <ButtonSelected
                      style={{
                        borderWidth:
                          this.state.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "1px"
                            : "0px",
                        border:
                          this.state.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "2px solid #5ECE7B"
                            : "#1D1F22",
                      }}
                    >
                      <ButtonAttributeColor
                        onClick={() =>
                          this.handleChangeProductSelectedAttribute(
                            outsideIndex,
                            choiceItem
                          )
                        }
                        id={choiceItem.id}
                        style={{
                          cursor: "pointer",
                          backgroundColor: choiceItem.value,
                          border:
                            choiceItem.value === "#FFFFFF"
                              ? "2px solid	#989898"
                              : null,
                        }}
                      />
                    </ButtonSelected>
                  ))}
                </SelectionContainer>
              </div>
            ) : (
              <div key={outsideIndex}>
                <ProductSpecificationTitle id={attributeItem.id}>
                  {attributeItem.name.toUpperCase()}
                </ProductSpecificationTitle>
                <SelectionContainer>
                  {attributeItem.items.map((choiceItem, index) => (
                    <ButtonAttribute
                      id={choiceItem.id}
                      onClick={() =>
                        this.handleChangeProductSelectedAttribute(
                          outsideIndex,
                          choiceItem
                        )
                      }
                      style={{
                        backgroundColor:
                          this.state.product?.selectedAttributes[outsideIndex]
                            ?.id === choiceItem.id
                            ? "#1D1F22"
                            : "white",
                        color:
                          this.state.product?.selectedAttributes[outsideIndex]
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

          <ProductSpecificationTitle>Price:</ProductSpecificationTitle>
          <PriceText>
            {this.getPriceValue()}
            {this.props.currency.symbol}
          </PriceText>
          <CartButton
            onClick={() => {
              this.props.handleAddToCart(this.state.product);
            }}
          >
            Add To Cart
          </CartButton>
          <ProductDescriptionContainer>
            {parse(this.state.product.description)}
          </ProductDescriptionContainer>
        </ProductItemContent>
      </ProductItemContainer>
    );
  }
}

export default withParams(ProductItem);
