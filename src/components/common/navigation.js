// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// function Navigation() {
//     return(
//         <Navbar expand='sm' bg="dark" sticky="top" className="primary-nav">
//             <Container>
//                 <Navbar.Brand href="#home" className="logo">TM</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link href="#skills">Technologies</Nav.Link>
//                         <Nav.Link href="#experience">Experience</Nav.Link>
//                         <Nav.Link href="#projects">Projects</Nav.Link>
//                         <Nav.Link href="#contact">Contact</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Navigation;

function Navigation() {
    return(
        <header>
            <div className="sticky-header">
                <div id="home" class="primary-nav">
                    <a href="#home" className="logo">TM</a>
                    <nav>
                        <ul>
                            <li><a href="#skills">Technologies</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;