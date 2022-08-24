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
  PriceText,
} from "../../../styles/ProductItem.style";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../../GraphQl/Queries";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

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
      },
    };
  }

  componentDidMount() {
    let { id } = this.props.params;

    const query = gql`
  query{
    product(id: "${id}"){
       id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      brand
      prices{
        currency {
          label
          symbol
        }
        amount
      }
      
    }
  }
  `;

    client
      .query({
        query: query,
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
    let priceValue = this.state?.product?.prices?.find(o => o.currency.symbol === this.props.currency.symbol)
    return priceValue?.amount
  }

  render() {
    return (
      
      <ProductItemContainer>
        <ImageGrid>
          {this.state.product.gallery.map((item, index) => (
            <ImagePreview
              src={item}
              onClick={() => {
                this.handleChangeDisplayImage(item,index);
              }}
            />
          ))}
        </ImageGrid>
        <ImageContainer src={this.state.product.displayedImage} />
        <ProductItemContent>
          <ProductTitle>{this.state.product.name}</ProductTitle>
          <ProductSubtitle>Running Short</ProductSubtitle>
          {
            this.state.product.attributes.map((attributeItem) => {
              console.log(attributeItem)
            })
          }
          <ProductSpecificationTitle>Size:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonSize>XS</ButtonSize>
            <ButtonSize>S</ButtonSize>
            <ButtonSize>M</ButtonSize>
            <ButtonSize>L</ButtonSize>
          </SelectionContainer>
          <ProductSpecificationTitle>Color:</ProductSpecificationTitle>
          <SelectionContainer>
            <ButtonColor1 />
            <ButtonColor2 />
            <ButtonColor3 />
          </SelectionContainer>
          <ProductSpecificationTitle>Price:</ProductSpecificationTitle>
          <PriceText>{this.getPriceValue()}{this.props.currency.symbol}</PriceText>
          <CartButton>Add To Cart</CartButton>
          {this.state.product.description}
        </ProductItemContent>
      </ProductItemContainer>
    );
  }
}

export default withParams(ProductItem);
