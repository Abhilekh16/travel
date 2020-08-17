import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {

  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav(){

    this.setState( {isNavOpen: !this.state.isNavOpen})
  }
  render() {
    return(
    <div>
      <Navbar color="secondary" dark expand="md">
            <div className ="container">
              <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand style={{color:"#fff"}}>Welcome Onboard</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span>Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span>About us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
            </div>
        </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Travel Across The World</h1>
                       <p>Enjoy the unique experience of various cultures, foods and destinations that will blow your mind!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </div>
    );
  }
}

export default Header;