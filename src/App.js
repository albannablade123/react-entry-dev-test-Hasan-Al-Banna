import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/Product/ProductItem";
import Checkout from "./components/Checkout/Checkout";
import { gql } from "@apollo/client";
import { GET_CATEGORIES } from "./GraphQl/Queries";

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
      category: "Women",
      categories: [],
    };
  }

  componentDidMount() {
    console.log("run")
    try {
      client
        .query({
          query: GET_CATEGORIES,
        })
        .then((result) =>
          result.data.categories.map(({name}) =>
            this.setState((prevState) => ({
              categories: [...prevState.categories, name],
            }))
          )
        ).then(console.log(this.state.categories));
    } catch (error) {
      console.log(error);
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
              />
            ) : null}

            <Routes>
              <Route
                exact
                path="/"
                element={<Products category={this.state.category} />}
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
