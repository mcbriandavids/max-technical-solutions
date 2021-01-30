import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.svg';

const NavBar = () => {
	return (
		<>
	
			<Navbar bg='light' variant='light' expand='lg' collapseOnSelect className='text-capitalize'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<Image src={logo} alt='max-logo' />
						</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className=' ml-auto '>
							<LinkContainer to='/'>
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>About Us</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/products'>
								<Nav.Link>Products</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact'>
								<Nav.Link>Contact Us</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
