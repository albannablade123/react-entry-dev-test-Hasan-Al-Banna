import React, { PureComponent } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  Background,
  NavbarLink,
  CartImg,
  OpenLinksButton,
  CartCounter,
  CartLogoDiv,
} from "../../styles/Navbar.style.js";
import Dropdown from "./CurrencyDropdown/CurrencyDropdown";
import CheckoutDropdown from "./CheckoutDropdown/CheckoutDropdown";

import empty_cart from "../../assets/empty_cart.png";
import store_logo from "../../assets/a-logo.png";

export class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      extendCurrencyNavbar: false,
      extendCartNavbar: false,
      isActive: 1,
      categories: this.props.categories || ["hex"],
    };
  }

  handleExtendCartNavbar = () => {
    this.setState({
      extendCartNavbar: true,
      extendCurrencyNavbar: false,
    });
  };

  handleCloseCartNavbar = () => {
    this.setState({
      extendCartNavbar: false,
      extendCurrencyNavbar: false,
    });
  };


  handleCloseCurrencyNavbar = () => {
    this.setState({
      extendCartNavbar: false,
      extendCurrencyNavbar: false,
    });
  };

  handleExtendCurrencyNavbar = () => {
    this.setState({
      extendCurrencyNavbar: !this.state.extendCurrencyNavbar,
      extendCartNavbar: false,
    });
  };

  

  render() {
    return (
      <NavbarContainer extendNavbar={this.state.extendCurrencyNavbar}>
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
          </LeftContainer>
          <img
            src={store_logo}
            style={{
              textAlign: "center",
              width: "41px",
              height: "41px",
              marginTop: "24px",
              marginRight: "395px",
            }}
            alt=""
          />
          <RightContainer>
            <OpenLinksButton
              onMouseLeave={() => this.handleExtendCurrencyNavbar()}
              onMouseEnter={() => this.handleExtendCurrencyNavbar()}
            >
              {!this.state.extendCurrencyNavbar ? (
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
                    handleCloseCurrencyNavbar={this.handleCloseCurrencyNavbar}
                    handleCurrencyChange={this.props.handleCurrencyChange}
                    currencies={this.props.currencies}
                  />
                </>
              )}
            </OpenLinksButton>

            <OpenLinksButton>
              <div
                onMouseEnter={() => this.handleExtendCartNavbar()}
              >
                <CartLogoDiv>
                  <CartImg src={empty_cart} />
                  <CartCounter>{this.props.cart.length}</CartCounter>
                </CartLogoDiv>

                {!this.state.extendCartNavbar ? null : (
                  <div>
                    <Background/>
                      
                    <CheckoutDropdown
                        onMouseLeave={() => this.handleCloseCartNavbar()}
                        handleCloseCartNavbar={this.handleCloseCartNavbar}
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
                  </div>
                )}
              </div>
            </OpenLinksButton>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
