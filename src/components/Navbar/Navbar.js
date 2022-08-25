import React, { PureComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  Background,
  NavbarLink,
  CartImg,
  OpenLinksButton,
} from "../../styles/Navbar.style.js";
import Dropdown from "./Dropdown.js";
import CheckoutDropdown from "../Checkout/CheckoutDropdown.js";

import empty_cart from "../../assets/empty_cart.png";

export class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      extendNavbar: false,
      extendCartNavbar: false,
      isActive: 1,
      categories: this.props.categories || ["hex"],
    };
  }

  onMouseEnter(event) {
    if (window.innerWidth < 956) {
      // console.log("based?");
    }
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    return (
      <NavbarContainer extendNavbar={this.state.extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer selectedCategory={this.state.selectedCategory}>
              {this.state.categories.map((item, index) => (
                <div
                  style={{
                    borderBottomColor:
                      item === this.props.category ? "#5ECE7B" : "white",
                    borderBottom:
                      item === this.props.category ? "2px solid #5ECE7B" : null,
                  }}
                >
                  <NavbarLink
                    to="/"
                    id="item"
                    key={index}
                    onClick={() => this.props.onClick(item)}
                    style={{
                      color: item === this.props.category ? "#5ECE7B" : "black",
                    }}
                  >
                    {item}
                  </NavbarLink>
                </div>
              ))}
            </NavbarLinkContainer>
            <img src="assets/a-logo.png" alt="" />
          </LeftContainer>

          <RightContainer>
            <OpenLinksButton
              onClick={() =>
                this.setState({
                  extendNavbar: !this.state.extendNavbar,
                  extendCartNavbar: false,
                })
              }
            >
              {!this.state.extendNavbar ? (
                <>
                  <NavbarLinkContainer>
                    {this.props.currency.symbol}
                    <span
                      class="material-symbols-outlined"
                      style={{ width: "2px" }}
                    >
                      expand_more
                    </span>
                  </NavbarLinkContainer>
                </>
              ) : (
                <>
                  <NavbarLinkContainer>
                    {this.props.currency.symbol}
                    <span class="material-symbols-outlined">expand_less</span>
                  </NavbarLinkContainer>
                  <Dropdown
                    handleCurrencyChange={this.props.handleCurrencyChange}
                    currencies={this.props.currencies}
                  />
                </>
              )}
            </OpenLinksButton>

            <OpenLinksButton>
              <CartImg
                src={empty_cart}
                onClick={() =>
                  this.setState({
                    extendCartNavbar: !this.state.extendCartNavbar,
                    extendNavbar: false,
                  })
                }
              ></CartImg>
              {!this.state.extendCartNavbar ? null : (
                <div>
                  <Background>
                    <CheckoutDropdown
                      onClick={() =>
                        this.setState({
                          extendCartNavbar: !this.state.extendCartNavbar,
                          extendNavbar: false,
                        })
                      }
                      currency={this.props.currency}
                      cart={this.props.cart}
                      handleDecrementProductQuantity={
                        this.props.handleDecrementProductQuantity
                      }
                      handleIncrementProductQuantity={
                        this.props.handleIncrementProductQuantity
                      }
                      getTotal={this.props.getTotal}
                      handleChangeSelectedAttribute={
                        this.props.handleChangeSelectedAttribute
                      }
                    />
                  </Background>
                </div>
              )}
            </OpenLinksButton>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
