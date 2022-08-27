import React, { Component } from "react";
import { CurrencyLi } from "../../../styles/Navbar.style";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
  }

  handleColorChangeSelected = (index) => {
    this.setState({ selectedIndex: index });
  };

  handleColorChangeNotSelected = () => {
    this.setState({ selectedIndex: null });
  };

  onClickCurrencyChange = (index) => {
    this.props.handleCurrencyChange(index);
    this.props.handleCloseCurrencyNavbar();
  };

  render() {
    return (
      <ul
        style={{
          listStyle: "none",
          padding: "0px 0px",
          margin: "0px 0px",
          top: "65px",
          right: "2%",
          position: "absolute",
          alignContent: "center",
          verticalAlign: "middle",
        }}
      >
        {this.props.currencies.map((item, index) => (
          <CurrencyLi
            key={index}
            className="menu-items"
            onClick={() => {
              this.props.handleCurrencyChange(index);
              this.props.handleCloseCurrencyNavbar();
            }}
            style={{
              backgroundColor:
                index === this.state.selectedIndex ? "#F0F0F0" : "#FFFFFF",
            }}
            onMouseEnter={() => this.handleColorChangeSelected(index)}
            onMouseLeave={() => this.handleColorChangeNotSelected(index)}
          >
            {item.symbol} {item.label}
          </CurrencyLi>
        ))}
      </ul>
    );
  }
}
