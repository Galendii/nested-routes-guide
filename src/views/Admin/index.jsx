import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Container, Body, Title, Subtitle, ReactRouterImage } from "./styles";

function Admin() {
  return (
    <Container>
      <Navbar />
      <ReactRouterImage>
        <img src="react-router.png" alt="React Router" />
      </ReactRouterImage>
      <Body>
        <Title>Admin</Title>
        <Subtitle>
          This is a secret page! Congratulations on being an admin!
        </Subtitle>
      </Body>

      <Footer />
    </Container>
  );
}

export default Admin;
