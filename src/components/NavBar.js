import { Navbar, Nav, NavLink,NavbarBrand } from "reactstrap";
import STL from '../pages/STL.PNG';
function NavBar() {
  return (
    <div>
      <Navbar color="info" light expand="md">
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
          <NavLink href="/">
            <span className="nav-link">Home</span>
          </NavLink>
          <NavLink href="/about">
            <span className="nav-link">About</span>
          </NavLink>
          {/* <NavLink href="/services">
            <span className="nav-link">Services</span>
          </NavLink> */}
          <NavLink href="/contactus">
            <span className="nav-link">Contact</span>
          </NavLink>
          <NavLink href="/login">
            <button className="btn btn-outline-secondary ml-3">Login</button>
          </NavLink>
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
