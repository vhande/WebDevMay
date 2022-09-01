import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

function Header({searchEvent}) {

  const x = useNavigate();
  const enterEvent = (e) => {
    if (e.key === 'Enter') {
      return x('/')
    }
  } 

  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React</Navbar.Brand>
      <input type="text" onChange= {searchEvent} onKeyDown={enterEvent} placeholder="Search..." />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to={'/'} className='nav-link text-decoration-none'>Homepage</Link>
          <Link to={'/contact'} className='nav-link text-decoration-none'>Contact</Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
          <Link to={'/movies/adventure'} className='dropdown-item text-decoration-none'>Adventure</Link>
          <Link to={'/movies/comedy'} className='dropdown-item text-decoration-none'>Comedy</Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='d-flex flex-row'>
                        <Link to={'/#social'}><FaTwitter fill='white' className="display-6 bg-primary p-1 rounded-1 mx-1"/></Link>
                        <Link to={'/#social'}><FaLinkedin fill='white' className="display-6 bg-primary p-1 rounded-1 me-1"/></Link>
                        <Link to={'/#social'}><FaInstagram fill='white' className="display-6 bg-instagram p-1 rounded-1 me-1"/></Link>
                    </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header