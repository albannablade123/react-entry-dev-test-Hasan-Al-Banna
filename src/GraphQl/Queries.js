import {useQuery, gql} from '@apollo/client';


export const GET_CATEGORIES = gql`
query{
    categories{
      name
    }
  }
    
`

export const GET_PRODUCTS = gql`
query{
  category(input: { title: "all" }){
    name
    products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}
`