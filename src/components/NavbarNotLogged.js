import '../styles/navbar.css';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavbarNotLogged extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fullDiv">
        <Navbar className="navbar" light  expand="md" fixed="top" color="white" >
          <NavbarBrand id="logo" href="/">TreatYourself</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navLink" href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="# ">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id="signInBtn" nav caret>
                  Sign in
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign in
                  </DropdownItem>
                  <DropdownItem divider />

                  <DropdownItem>
                    Sign up
                  </DropdownItem>


                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
