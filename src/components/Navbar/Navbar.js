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
import Dropdown from "./Dropdown.js";

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

  onMouseEnter(event) {
    if (window.innerWidth < 956) {
      console.log("based?");
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
                <NavbarLink
                  to="/"
                  id="item"
                  key={index}
                  onClick={() => this.props.onClick(item)}
                >
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
              {this.state.extendNavbar === true ? (
                <>
                  <NavbarLinkContainer>
                    &#36;{" "}
                    <span class="material-symbols-outlined" style={{width:'2px'}}>expand_more</span>
                  </NavbarLinkContainer>
                </>
              ) : (
                <>
                  <NavbarLinkContainer>
                    &#36;{" "}
                    <span class="material-symbols-outlined">expand_less</span>
                  </NavbarLinkContainer>
                  <Dropdown />
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
