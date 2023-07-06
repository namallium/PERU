import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {
   return (
      <>
         <Navbar className="bigNavbar" data-bs-theme="light">
            <Container className='navbarItems'>
               <Navbar.Brand href="">
                  <img
                     alt="PERU Logo"
                     src="https://www.peru.pitt.edu/wp-content/uploads/2020/01/PERU_logo_bold.png"
                     width="170"
                     height="80"
                     className="d-inline-block align-top"
                  />{' '}
               </Navbar.Brand>
               <Nav className="me-auto">
                  <NavDropdown title="About" id="basic-nav-dropdown">
                     <NavDropdown.Item href="https://www.peru.pitt.edu/mission/">Vision</NavDropdown.Item>
                     <NavDropdown.Item href="https://www.peru.pitt.edu/personnel-3/">Our Team</NavDropdown.Item>
                     <NavDropdown.Item href="https://www.peru.pitt.edu/partners/">Partners</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Programs and Research" id="basic-nav-dropdown">
                     <NavDropdown.Item href="https://www.peru.pitt.edu/projects/community-health-initiatives/">Community Health Initiatives</NavDropdown.Item>
                     <NavDropdown.Item href="https://www.peru.pitt.edu/ihsi/">Innovative Health System Initiatives</NavDropdown.Item>
                     <NavDropdown.Item href="https://www.peru.pitt.edu/projects/veterans-affairs/">Veterans Affairs Initiatives</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="https://www.peru.pitt.edu/publications/">Publications</Nav.Link>

                  <Nav.Link href="https://www.peru.pitt.edu/news/">News</Nav.Link>

                  <Nav.Link href="https://www.peru.pitt.edu/contact-us/">Contact Us</Nav.Link>
               </Nav>
               <Navbar.Brand href="">
                  <img
                     alt="School Of Pharmacy Logo"
                     src="https://www.peru.pitt.edu/wp-content/uploads/2020/01/Logo_SchoolOfPharmacy_2019.png"
                     width="280"
                     height="60"
                     className="d-inline-block align-top"
                  />{' '}
               </Navbar.Brand>
            </Container>
         </Navbar>
      </>
   );
}

export default Navigation;