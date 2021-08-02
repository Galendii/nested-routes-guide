import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Container, Body, Title, Subtitle, ReactRouterImage } from "./styles";

function Home() {
  return (
    <Container>
      <Navbar />
      <ReactRouterImage>
        <img src="react-router.png" alt="React Router" />
      </ReactRouterImage>
      <Body>
        <Title>Home</Title>
        <Subtitle>Our super cool website for learning about routing</Subtitle>
      </Body>

      <Footer />
    </Container>
  );
}

export default Home;
