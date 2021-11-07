import React from 'react';
import Header from '../Header/Header';
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

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <PrepareProject />
            <Team />
            <HireMe />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;