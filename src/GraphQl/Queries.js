import { useQuery, gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    category(input: { title: "all" }) {
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

export const GET_TECH_PRODUCTS = gql`
  query {
    category(input: { title: "tech" }) {
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

export function GET_PRODUCT_BY_ID(id) {
  return gql`
  query{
    product(id: ${id}){
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
}

export const GET_CLOTHES_PRODUCTS = gql`
  query {
    category(input: { title: "clothes" }) {
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

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
