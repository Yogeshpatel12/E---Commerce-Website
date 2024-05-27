import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg"  className='bg-gray-300 m-2 p-1 '>
      <Container>

        {/* For home page */}
        <LinkContainer to="/">
        <Navbar.Brand className='text-gray-800  hover:text-blue-800 text-2xl font-extrabold'><i class="fa-brands fa-slack m-1"></i>GADGET-STORe</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">


        {/* for cart page */}
        <LinkContainer to="/cart">
        <Nav.Link className='text-gray-800 hover:text-blue-700 font-bold'><i className="fa-solid fa-cart-shopping m-1"></i>Cart</Nav.Link>
        </LinkContainer>


        {/* for signup page */}
        <LinkContainer to="/signin">
        <Nav.Link href="/SignIn" className='text-gray-800 hover:text-blue-700 font-bold'><i className="fa-solid fa-user m-1"></i>Sign in</Nav.Link>
        </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header