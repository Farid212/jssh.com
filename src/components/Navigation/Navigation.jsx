import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdown,
  MDBNavLink,
  MDBNavItem
} from 'mdbreact';

import { Link } from 'react-router-dom';

import NavigationDropdownItem from '../NavigationDropdownItem';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
          <MDBNavbar fixed="top" light expand="md" scrolling  style={{backgroundColor: "#ffe51f"}}>
            <MDBNavbarBrand href="/">
              <strong>JSSH</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink as={Link} to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink as={Link} to="/about">About</MDBNavLink>
                  </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBDropdown>
                <MDBDropdownToggle caret color="primary">
                  Language
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <NavigationDropdownItem array={['[FR]', '[JP]', '[EN]']} /> 
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
      </header>
    );
  }
}

export default Navigation;
