import { NavLink as ReactLink, useNavigate } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavbarBrand,
  NavLink,
  NavItem,
} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import stl from "../pages/STL.PNG";
//import gunalan from "../pages/gunalan.PNG";
//import example from "../components/Example.css";
import './Example.css';
import { useEffect, useState } from "react";
import { doLogout, getCurrentUserDetail, isLogggedIn } from "../auth";

const Example = () => {
  let navigate = useNavigate();

  const [login, setLogin] = useState(false);
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    setLogin(isLogggedIn());
    setClient(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      // logged out
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <>
      <Navbar bg="info" expand="lg" className="px-1">
        <Container>
          <Navbar
            style={{
              paddingRight: 20,
            }}
            className="my-2"
            color="white"
            white
          >
            {" "}
            <NavbarBrand href="/">
              {" "}
              <img
                alt="bank"
                src={stl}
                style={{
                  height: 50,
                  width: 90,
                }}
              />
              {" "}
            </NavbarBrand>
            {" "}
          </Navbar>
          {" "}
          <Navbar.Brand tag={ReactLink} href="/">
            <strong>
              <h5 className="whitetext">STL Bank</h5>
            </strong>
          </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          <Navbar.Collapse id="basic-navbar-nav">
            {" "}
            <Nav className="me-auto">
              {" "}
              <NavLink tag={ReactLink} href="/about" className="whitetext">
                About Us
              </NavLink>
              <NavLink tag={ReactLink} href="/contactus">
                {" "}
                Contact Us{" "}
              </NavLink>
              {" "}
            </Nav>
            {" "}
            <Nav navbar>
              {" "}
              {login && (
                <>
                  {" "}
                  <NavItem>
                    
                    <NavLink tag={ReactLink} href="/client/profileinfo">
                      {" "}
                      Profile Info{" "}
                    </NavLink>{" "}
                    {" "}
                  </NavItem>
                  {/* 
                <NavItem>      
                   <NavLink tag={ReactLink} href = "/client/dashboard"> {client.email}
                   </NavLink>   
                </NavItem> */}
                  {" "}
                  {/* <NavItem>
                   <NavLink onClick={logout} > Logout </NavLink>   
                </NavItem> */}
                  {" "}
                  <NavItem>
                    
                    <NavLink onClick={logout}> Logout </NavLink> 
                    {" "}
                  </NavItem>
                  {" "}
                  <NavItem>
                    {" "}
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                      {" "}
                      {/* <NavDropdown.Item tag={ReactLink} href="/account">Account</NavDropdown.Item> */}
                      {" "}
                      <NavDropdown.Item
                        tag={ReactLink}
                        href="/client/accountdetails"
                      >
                         Account Details {" "}
                      </NavDropdown.Item>
                      {" "}
                      <NavDropdown.Item
                        tag={ReactLink}
                        href="/client/transactions"
                      >
                        Transactions Page {" "}
                      </NavDropdown.Item>
                      {" "}
                      <NavDropdown.Item
                        tag={ReactLink}
                        href="/client/transactionshistory"
                      >
                         Transaction History
                      </NavDropdown.Item>
                       <NavDropdown.Divider />{" "}
                    </NavDropdown>
                    {" "}
                    {/* <NavLink onClick={ReactLink} href="/client/accountdetails" >Account Details</NavLink> */}
                    {" "}
                  </NavItem>
                  {" "}
                  <NavItem>
                    {" "}
                    <NavDropdown title="Fund" id="basic-nav-dropdown">
                      {" "}
                      {/* <NavDropdown.Item tag={ReactLink} href="/fundtransfer">Fund Transfer</NavDropdown.Item> */}
                      {" "}
                      <NavDropdown.Item
                        tag={ReactLink}
                        href="/client/fundtransferbtw2"
                      >
                         Fund Transfer between two accounts 
                        {" "}
                      </NavDropdown.Item>
                      {" "}
                      <NavDropdown.Item
                        tag={ReactLink}
                        href="/client/fundtransferbtw3"
                      >
                         Third Party Transfer {" "}
                      </NavDropdown.Item>
                      {" "}
                    </NavDropdown>
                    {" "}
                  </NavItem>
                  {" "}
                </>
              )}
              {" "}
              {!login && (
                <>
                  {" "}
                  <NavItem>
                    {" "}
                    <NavLink tag={ReactLink} href="/login">
                      {" "}
                      Login{" "}
                    </NavLink>{" "}
                    {" "}
                  </NavItem>
                  {" "}
                  <NavItem>
                    
                    <NavLink tag={ReactLink} href="/signup">
                      {" "}
                      Register{" "}
                    </NavLink>
                    {" "}
                  </NavItem>
                  {" "}
                </>
              )}
              {" "}
            </Nav>
            {" "}
          </Navbar.Collapse>
          {" "}
        </Container>
        {" "}
      </Navbar>
      {" "}
    </>
  );
};

export default Example;
