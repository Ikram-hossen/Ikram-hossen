import {React, Component} from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Button} from 'react-bootstrap';
import Logo from '../../../dist/images/logo.png';
import '../../../dist/css/style.css';
import '../../../dist/css/responsive.css';
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import PrepareProject from './components/PrepareProject';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from '../Footer/Footer';
import HireMe from './components/HireMe';
import Portfolio from './components/Portfolio';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.svg";

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.scrollToNode = this.scrollToNode.bind(this);
      }
      
      scrollToNode(node) {
        node.scrollIntoView({ behavior: 'smooth' });
      }
    render(){
        return (
            <div>
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
                                            <Link to="" className="nav-link active"  onClick={() => this.scrollToNode(this.banner)}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link"  onClick={() => this.scrollToNode(this.about)}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link"  onClick={() => this.scrollToNode(this.services)}>Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link" onClick={() => this.scrollToNode(this.portfolio)}>Portfolio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link" onClick={() => this.scrollToNode(this.contact)}>Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  to="" className="btn header-hireme-btn d-inline-block" onClick={() => this.scrollToNode(this.contact)}>Hire Me</Link>
                                        </li>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Navbar>
                    
                    </div>
                </header>
                <ScrollToTop smooth component={<MySVG />} />
                <div ref={(node) => this.banner = node}>
                    <Banner />
                </div>
                <div ref={(node) => this.about = node}>
                    <About />
                </div>
                <div ref={(node) => this.experience = node}>
                    <Experience />
                </div>
                <div ref={(node) => this.services = node}>
                    <Services />
                </div>
                <div ref={(node) => this.portfolio = node}>
                    <Portfolio />
                </div>
                <PrepareProject />
                <Team />
                <HireMe />
                <Testimonials />
                <div ref={(node) => this.contact = node}>
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    };     
}

export default Home;