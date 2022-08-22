import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from '../MenuItem';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSelected: False
        };
      };


    handleSelect(event){
      this.setState({isSelected: !this.state.isSelected})
    }


    render() {
        return (
        <>
        <ul onClick={handleSelect} className={isSelected ? 'dropdown-menu clicked' : 'dropdown-menu'}>

          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link 
                className={item.cName} 
                to={item.path} 
                onClick={() => this.setState({isSelected: false})}>
                   {item.currency}
                </Link>
              </li>
            )
          })}
        </ul>
          
        </>
        )
    }
}
