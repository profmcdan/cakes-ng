import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container,
  View,
  Mask
} from "mdbreact";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div className="fixed-sn light-blue-skin">
        <Navbar color="black" dark expand="md" scrolling>
          <Container>
            <NavbarBrand href="/">
              <strong>V-Cake</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Profile</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
