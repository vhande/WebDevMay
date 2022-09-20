import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
  <>
    <Navbar className="justify-content-center fixed-top bg-secondary">
    <Nav variant="pills">
    <Link to={'/'} className="nav-link text-light">Home</Link>
    <Link to={'/about'} className="nav-link text-light">About</Link>
    </Nav>
    </Navbar>

</>
  )
}

export default Header