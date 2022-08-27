import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
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
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById ($id: String!) {
    product(id: $id){
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


export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
