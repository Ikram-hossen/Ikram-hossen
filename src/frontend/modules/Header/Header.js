
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import Logo from '../../../dist/images/logo.png';
import '../../../dist/css/style.css';
import '../../../dist/css/responsive.css';


const Header = () => {

    return (
        <header id="header" className="header-main">
            <div className="navbarWrap">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className="p-0">
                    <div className="container">
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={Logo} alt="Logo" className="header-logo"/> 
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about-us" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/s" className="nav-link">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="btn header-hireme-btn d-inline-block">Hire Me</a>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
               
            </div>
        </header>
     );
}

export default Header;