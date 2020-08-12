import React, {Component} from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends Component{

    render(){
        return (
        <Navbar color="secondary">
            <div className ="container">
                <NavbarBrand style={{color:"#fff"}}>Welcome Onboard</NavbarBrand>
            </div>
        </Navbar>
        );
    }
}

export default NavBar;