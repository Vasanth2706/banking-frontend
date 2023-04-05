import React from "react";
import STL from '../pages/STL.PNG';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './DashBoardNav.css';

function DashBoardNav() {
    const history = useNavigate(); 

    function logoutAccount(){
        localStorage.removeItem("User");
        history('/');
      }
  return (
    <div>
      <Navbar color="light" light expand="md">
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
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/dashboard" className="button">
              Account Summary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/thirdparty" className="button">
              Add Beneficiary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/fundtransfer" className="button">
              Fund Transfer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/transactions" className="button">
              Transactions
            </NavLink>
          </NavItem>
          <NavItem>
            <Button
              outline
              color="primary"
              className="button"
              onClick={logoutAccount}
            >
              LogOut
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default DashBoardNav;
