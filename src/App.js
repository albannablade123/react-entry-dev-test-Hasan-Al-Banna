import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/Product/ProductItem";
import Checkout from "./components/Checkout/Checkout";
import { gql } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCTS } from "./GraphQl/Queries";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { graphql } from "graphql";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      categories: [],
      isLoading: true,
      products: [],
      cart: [],
    };
  }

  getCategories() {
    try {
      const tempCategoriesArray = [];
      client
        .query({
          query: GET_CATEGORIES,
        })
        .then((result) =>
          result.data.categories.map(({ name }) =>
            tempCategoriesArray.push(name)
          )
        )
        .then(() =>
          this.setState((prevState) => ({
            categories: tempCategoriesArray,
            category: tempCategoriesArray[0],
          }))
        )
        .then(() =>
            this.getProductByCategories()
              );
    } catch (error) {
      console.log(error);
    }
  }

  getProductByCategories() {
    const tempProductsArray = [];
    try {
      client
            .query({
              query: GET_PRODUCTS,
            })
            .then((result) =>
              result.data.category.products.map((product) =>
                tempProductsArray
                  .push({
                    id: product.id,
                    name: product.name,
                    inStock: product.inStock,
                    category: product.category,
                    price: product.prices[0].amount,
                    displayImage: product.gallery[0],
                  })))
                  .then(() =>
                    this.setState((prevState) => ({
                      ...prevState,
                      products: tempProductsArray,
                    }))
                  )
    } catch (error) {
      console.log(error);
    }
  }

  handleClick = (newCategory) => {
    this.setState({
      ...this.state,
      category: newCategory,
    });
  };

  setLoading = () => {
    this.setState({
      ...this.state,
      isLoading: false,
    });
  };

  componentDidUpdate(previousProps, prevState) {
    console.log(this.state);
    if (prevState.category !== this.state.category) {
      //this.getCategories();
    }
  }

  async componentDidMount() {
    console.log(this.props);
    if (this.state.categories.length === 0 && this.state.isLoading === true) {
      this.getCategories();
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            {this.state.categories.length ? (
              <Navbar
                fetchCategories={this.fetchCategories}
                categories={this.state.categories}
                onClick={this.handleClick}
              />
            ) : null}

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Products
                    category={this.state.category}
                    products={this.state.products}
                  />
                }
              />
              <Route
                exact
                path="/product"
                element={<ProductItem category={this.state.category} />}
              />
              <Route
                exact
                path="/checkout"
                element={<Checkout category={this.state.category} />}
              />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
