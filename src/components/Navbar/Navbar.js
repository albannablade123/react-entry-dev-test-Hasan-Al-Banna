import React, { PureComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  CartImg,
  OpenLinksButton,
} from "../../styles/Navbar.style.js";

import empty_cart from "../../assets/empty_cart.png";

export class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      extendNavbar: true,
      isActive: 1,
      dropdown: false,
      categories: this.props.categories || ["hex"],
    };
  }

  componentDidUpdate(previousProps,prevState) {
    if (previousProps.categories !== this.state.categories) {
      this.props.fetchCategories();
    }
}

  onMouseEnter(event) {
    if (window.innerWidth < 956) {
      console.log("based?");
    }
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    return (
      
      <NavbarContainer extendNavbar={this.state.extendNavbar}>
        {" "}
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer selectedCategory={this.state.selectedCategory}>
                {
                this.state.categories.map((item, index) => (
                  <NavbarLink to="/" id="item" key={index}>
                    {item}
                  </NavbarLink>
                ))}
            </NavbarLinkContainer>
            <img src="assets/a-logo.png" alt="" />
          </LeftContainer>

          <RightContainer>
            <OpenLinksButton
              onClick={() =>
                this.setState({ extendNavbar: !this.state.extendNavbar })
              }
            >
              {/* (val) => this.setState({ extendNavbar: !val }) */}

              {this.state.extendNavbar === true ? (
                <>
                  {" "}
                  <NavbarLinkContainer>&#36; ;</NavbarLinkContainer>{" "}
                </>
              ) : (
                <>
                  <NavbarLinkContainer>&#36; &#8801;</NavbarLinkContainer>
                </>
              )}
              {/* && {dropdown} */}
            </OpenLinksButton>
            <CartImg src={empty_cart}></CartImg>
          </RightContainer>
        </NavbarInnerContainer>
        {this.state.extendNavbar && (
          <NavbarExtendedContainer></NavbarExtendedContainer>
        )}
      </NavbarContainer>
    );
  }
}

export default Navbar;
