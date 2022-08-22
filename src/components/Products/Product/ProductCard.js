import React, { Component } from 'react'
import { Card, CardImage, CardTitle,CardPriceTitle} from '../../../styles/Products.style.js';

export default class ProductCard extends Component {

  render() {
    return (
      <Card>
        <CardImage src="https://image.api.playstation.com/cdn/EP0002/CUSA05379_00/iTxbX14rj7Qhk3zYc6bnmDiuXMIK2UUW.png" alt="" />
        <CardTitle>Apollo Card Running Short</CardTitle>
        <CardPriceTitle>
            50.00$
        </CardPriceTitle>
        </Card>
    )
  }
}
