import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
          Your Cart
          </DropdownToggle>
          <DropdownMenu right>
             {this.props.cart.map(cartItem => (
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))} 
            <DropdownItem>Option1</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
