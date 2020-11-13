import React from 'react'
import Jumbotron from '../../components/Jumbotron';
import Features from '../../components/Features';
import FeaturesV2 from '../../components/FeaturesV2';
import TabsJustified from '../../components/TabsJustified';

import { MDBContainer } from 'mdbreact';


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
        <FeaturesV2 />
      </section>
      <section id="section4">
        <TabsJustified />
      </section>
    </MDBContainer>

  </>
);

export default Home;
