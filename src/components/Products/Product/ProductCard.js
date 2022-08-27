import React, { Component } from "react";
import { Link} from "react-router-dom";
import {
  Card,
  CardImage,
  CardTitle,
  CardPriceTitle,
  StockTextContainer,
  StockText,
  AddToCartCircularButton,
} from "../../../styles/Products.style.js";

import cart_logo_buy from "../../../assets/Vector.png";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      onHover: true,
    });
  };
  handleMouseLeave = () => {
    this.setState({
      onHover: false,
    });
  };

  getPriceValue() {
    let priceValue = this.props.price.find(
      (o) => o.currency.symbol === this.props.currency.symbol
    );
    return priceValue.amount;
  }

  render() {
    const onHoverStyle = {
      boxShadow: this.state.onHover ? "0px 4px 35px #E5E5E5" : "0px 0px",
    };

    const stockStyle = {
      opacity: this.props.inStock ? "100%" : "50%",
    };
    return (
    
      <Card
        style={this.props.inStock ? onHoverStyle : stockStyle}
        onMouseEnter={() => {
          this.handleMouseEnter();
        }}
        onMouseLeave={() => {
          this.handleMouseLeave();
        }}
      >
        {!this.props.inStock ? (
          <StockTextContainer>
            <StockText>Out of stock</StockText>
          </StockTextContainer>
        ) : null}
        <CardImage src={this.props.image} alt="" />
        {this.props.inStock && this.state.onHover && (
          <Link
            to={`product/${this.props.id}`}
            key={this.props.id}
            style={{ textDecoration: "none" }}
          >
            <AddToCartCircularButton>
              <img src={cart_logo_buy} alt="" />
            </AddToCartCircularButton>
          </Link>
        )}
        <CardTitle>{this.props.name}</CardTitle>
        <CardPriceTitle>
          {this.props.currency.symbol}
          {this.getPriceValue()}
        </CardPriceTitle>
      </Card>
    );
  }
}

//
