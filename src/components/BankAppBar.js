import React from 'react'
import { Navbar,NavbarBrand,NavItem,NavLink,Nav,Button } from 'reactstrap'
import STL from '../pages/STL.PNG';
function BankAppBar() {
  return (
    <div>
        <Navbar color="info" light expand="lg">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={STL}
            style={{
              height: 50,
              width: 100,
            }}
          />
          STL Bank
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            
          </NavItem>
        </Nav>
        {/* <Button color="primary" outline onClick={logOutUser}>Logout</Button> */}
      </Navbar>
    </div>
  )
}

export default BankAppBar