import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/nav-logo.png'
import '../../assets/styles/navbar.css'

const Navbars = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container className='justify-content-between'>
                    <Navbar.Brand href="#home"><Link><img className='w-75' src={Logo} alt="logo img" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <NavLink className='link-item text-decoration-none mx-3' to="/" >home</NavLink>
                            <NavLink className='link-item text-decoration-none mx-3' to="/review-proerty" > Review a Property</NavLink>
                            <NavLink className='link-item text-decoration-none mx-3' to="/read-reviews" > Read Reviews</NavLink>
                            <NavLink className='link-item text-decoration-none mx-3' to="/articles" > Articles</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="login">
                        <NavLink className="btn btn-info text-white px-4 text-capitalize" to="" > log in</NavLink>    
                    </div>
            </Container>
    </Navbar>
    </div>
  )
}

export default Navbars