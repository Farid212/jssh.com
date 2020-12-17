import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Features from '../../components/Features';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import { MDBContainer } from 'mdbreact';

import 'mdbreact/dist/css/mdb.css';


const Home = () =>(
  <>
    <section id="section1">
      <Jumbotron />
    </section>
    <MDBContainer>
      <section id="section2">
        <Features />
      </section>
      <section id="section3">
        <Project />
      </section>
    </MDBContainer>
    <section id="section4">
      <Footer />
    </section>
  </>
);

export default Home;
