import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

const Header = (props) => {


return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Verge</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">
        Create New App
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse  navbar>
    //       <Nav className="ml-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/create" >Create Application</NavLink>
    //           <Router>

    //           </Router>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="all_applications">View All Applications</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>

    // </div>
  );
}

export default Header;