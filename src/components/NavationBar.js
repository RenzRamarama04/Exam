import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline } from "mdbreact";

class NavigationBar extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
render(){
  const isLoggedin=window.localStorage.getItem('isLoggedin');
  const loggedInbtnClick=window.localStorage.getItem('loggedInbtnClick');
    return (
<MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Test</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Social">Social</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink to="/Profile">Profile</MDBNavLink>
            </MDBNavItem>
            {isLoggedin && loggedInbtnClick ? (
            <MDBNavItem>
              <MDBNavLink onClick={()=>{
                window.localStorage.setItem('isLoggedin', false);
                window.localStorage.setItem('loggedInbtnClick', false);
              }} to="/Login">Logout</MDBNavLink>
            </MDBNavItem>) :

            (<MDBNavItem>
              <MDBNavLink to="/Login">Login</MDBNavLink>
            </MDBNavItem>)
            }
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}
export default NavigationBar;