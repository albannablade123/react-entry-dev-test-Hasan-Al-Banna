import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductItem from "./components/Products/Product/ProductItem";
import Checkout from "./components/Checkout/Checkout";
import {
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY,
  GET_CURRENCIES,
} from "./GraphQl/Queries";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      currencies: [],
      selectedCurrency: {
        label: "",
        symbol: "",
      },
      total: 0,
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
        .then(() => this.getProductByCategories());
    } catch (error) {
      console.log(error);
    }
  }

  getProductByCategories() {
    const tempProductsArray = [];
    try {
      client
        .query({
          query: GET_PRODUCTS_BY_CATEGORY,
        })
        .then((result) =>
          result.data.category.products.map((product) =>
            tempProductsArray.push({
              id: product.id,
              name: product.name,
              inStock: product.inStock,
              category: product.category,
              price: product.prices,
              displayImage: product.gallery[0],
            })
          )
        )
        .then(() =>
          this.setState((prevState) => ({
            ...prevState,
            products: tempProductsArray,
          }))
        );
    } catch (error) {
      console.log(error);
    }
  }

  setLoading = () => {
    this.setState({
      ...this.state,
      isLoading: false,
    });
  };

  fetchCurrencies() {
    let tempCurrencyArray = [];
    try {
      client
        .query({
          query: GET_CURRENCIES,
        })
        .then((result) =>
          result.data.currencies.map((currency) =>
            tempCurrencyArray.push({
              label: currency.label,
              symbol: currency.symbol,
            })
          )
        )
        .then(() =>
          this.setState((prevState) => ({
            ...prevState,
            currencies: tempCurrencyArray,
            selectedCurrency: {
              label: tempCurrencyArray[0].label,
              symbol: tempCurrencyArray[0].symbol,
            },
          }))
        );
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(previousProps, prevState) {
    if (prevState.category !== this.state.category) {
      const tempProductsArray = [];
      let queryTest;

      client
        .query({
          query: GET_PRODUCTS_BY_CATEGORY,
          variables: { category : this.state.category}
        })
        .then((result) =>
          result.data.category.products.map((product) =>
            tempProductsArray.push({
              id: product.id,
              name: product.name,
              inStock: product.inStock,
              category: product.category,
              price: product.prices,
              displayImage: product.gallery[0],
            })
          )
        )
        .then(() =>
          this.setState((prevState) => ({
            ...prevState,
            products: tempProductsArray,
          }))
        );
    }
  }

  async componentDidMount() {
    if (this.state.categories.length === 0 && this.state.isLoading === true) {
      this.getCategories();
      this.fetchCurrencies();
    }
  }

  handleClick = (newCategory) => {
    this.setState({
      ...this.state,
      category: newCategory,
    });
  };

  getTotalQuantity = () => {

    if (!this.state.cart) {
      return 0;
    }
    let total = 0;
    this.state.cart.forEach(
      (item) => {
        total += item.quantity;
      }
    );

    return total;
  };

  getTotal = (currency) => {
    if (!this.state.cart) {
      return 0;
    }
    let total = 0;
    this.state.cart.forEach((item) => {
      item.prices.forEach((o) => {
        if (o.currency.symbol === this.state.selectedCurrency.symbol) {
          total += o.amount * item.quantity;
        }
      });
    });

    return total.toFixed(2);
  };

  handleIncrementProductQuantity = (prevQuantity, productId) => {
    let tempProductArray = this.state.cart;
    tempProductArray = tempProductArray.map((obj) => {
      if (obj.id === productId) {
        return { ...obj, quantity: prevQuantity + 1 };
      }

      return obj;
    });

    this.setState({
      ...this.state,
      cart: tempProductArray,
    });
  };

  handleDecrementProductQuantity = (prevQuantity, productId) => {
    let tempProductArray = this.state.cart;
    tempProductArray = tempProductArray.map((obj) => {
      if (obj.id === productId && prevQuantity > 1) {
        return { ...obj, quantity: prevQuantity - 1 };
      }
      return obj;
    });

    this.setState({
      ...this.state,
      cart: tempProductArray,
    });
  };

  handleCurrencyChange = (newCurrency) => {
    this.setState({
      ...this.state,
      selectedCurrency: this.state.currencies[newCurrency],
    });
  };

  handleAddToCart = (newProduct) => {
    window.confirm(`Add ${newProduct.name} to cart?`);
    const index = this.state.cart.findIndex((element) => {
      if (element.id === newProduct.id) {
        return true;
      }
      return false;
    });

    if (index >= 0) {
      let tempProductArray = this.state.cart;
      let prevCount = this.state.cart[index].quantity;
      tempProductArray = tempProductArray.map((obj) => {
        if (obj.id === newProduct.id) {
          return { ...obj, quantity: prevCount + 1 };
        }

        return obj;
      });

      this.setState({
        ...this.state,
        cart: tempProductArray,
      });

      console.log(tempProductArray);
    } else {
      newProduct = {
        ...newProduct,
        quantity: 1,
      };

      console.log(newProduct);
      this.setState((prevState) => ({
        cart: [...prevState.cart, newProduct],
      }));
    }
  };

  handleChangeSelectedAttribute = (
    productId,
    newAttribute,
    outerIndex,
    indexItem
  ) => {

    console.log(productId,newAttribute,outerIndex)
    const index = this.state.cart.findIndex((o) => o.id === productId);
    const tempCartArray = this.state.cart;

    let oldTempSelectedAttributes = this.state.cart[index].selectedAttributes;
    oldTempSelectedAttributes[outerIndex] = newAttribute;
    tempCartArray[index] = {
      ...tempCartArray[index],
      selectedAttributes: oldTempSelectedAttributes,
    };

    this.setState({
      cart: tempCartArray,
    });
  };

  render() {
    if (!this.state.categories) return <h1>Loading....</h1>;
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            {this.state.categories.length ? (
              <Navbar
                fetchCategories={this.fetchCategories}
                categories={this.state.categories}
                onClick={this.handleClick}
                category={this.state.category}
                currencies={this.state.currencies}
                currency={this.state.selectedCurrency}
                cart={this.state.cart}
                handleCurrencyChange={this.handleCurrencyChange}
                handleDecrementProductQuantity={
                  this.handleDecrementProductQuantity
                }
                handleIncrementProductQuantity={
                  this.handleIncrementProductQuantity
                }
                handleChangeSelectedAttribute={
                  this.handleChangeSelectedAttribute
                }
                getTotal={this.getTotal}
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
                    currency={this.state.selectedCurrency}
                  />
                }
              />
              <Route
                exact
                path="/product/:id"
                element={
                  <ProductItem
                    category={this.state.category}
                    currency={this.state.selectedCurrency}
                    handleAddToCart={this.handleAddToCart}
                  />
                }
              />
              <Route
                exact
                path="/checkout"
                element={
                  <Checkout
                    category={this.state.category}
                    cart={this.state.cart}
                    currency={this.state.selectedCurrency}
                    handleDecrementProductQuantity={
                      this.handleDecrementProductQuantity
                    }
                    handleIncrementProductQuantity={
                      this.handleIncrementProductQuantity
                    }
                    handleChangeSelectedAttribute={
                      this.handleChangeSelectedAttribute
                    }
                    getTotal={this.getTotal}
                    getTotalQuantity={this.getTotalQuantity}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
