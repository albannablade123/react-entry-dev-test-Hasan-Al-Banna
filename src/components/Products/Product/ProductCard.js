import React, { Component } from 'react'
import { Card, CardImage, CardTitle,CardPriceTitle, StockTextContainer, StockText, AddToCartCircularButton} from '../../../styles/Products.style.js';

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
 handleMouseLeave = () =>{
  this.setState({
    onHover: false,
  });
 };

 handleAddToCart = () => {
  console.log("add to cart")
 }

  render() {
    const onHoverStyle = {
      boxShadow: this.state.onHover? '0px 4px 35px #E5E5E5': '0px 0px',
    };

    const stockStyle = {
      opacity: this.props.inStock? '100%': '50%',
    }
    return (
      <Card style={onHoverStyle} onMouseEnter={()=>{this.handleMouseEnter()}} onMouseLeave={()=>{this.handleMouseLeave()}}>
        {
          !this.props.inStock?
          <StockTextContainer>
            <StockText>Out of stock</StockText>
          </StockTextContainer>: null
        }
        <CardImage src={this.props.image} style={stockStyle} alt="" />
        {
          this.props.inStock && this.state.onHover && <AddToCartCircularButton onClick={()=>{this.handleAddToCart()}}/>
        }
        <CardTitle>{this.props.name}</CardTitle>
        <CardPriceTitle>
            {this.props.price + "$"}
        </CardPriceTitle>
        </Card>
    )
  }
}
