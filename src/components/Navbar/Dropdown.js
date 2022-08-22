import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CurrencyLi } from "../../styles/Navbar.style";
import { MenuItems } from "../MenuItem";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      submenus: [
        {
          title: "$ USD",
          url: "web-design",
        },
        {
          title: "E Euro",
          url: "web-dev",
        },
        {
          title: "Y JPY",
          url: "seo",
        },
      ],
    };
  }

  handleSelect(event) {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    return (
      <ul style={{listStyle: 'none', padding: "0px 0px", margin: "0px 0px"}}>
        {this.state.submenus.map((submenu, index) => (
          <CurrencyLi key={index} className="menu-items">
            {submenu.title}
          </CurrencyLi>
        ))}
      </ul>
    );
  }
}
