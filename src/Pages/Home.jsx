import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Support from '../components/Support';
import AllInOne from '../components/AllInOne';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Footer />
    </>
  );
}

export default Home