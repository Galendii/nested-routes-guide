import React from "react";

import { Container, Title, Subtitle } from "./styles";

function Footer() {
  console.log(localStorage?.getItem("access") === "999");

  return (
    <Container>
      <Title>Proudly developed by Breno Zielinski Galendi</Title>
      <Subtitle>
        Please, share and give suggestions about more contents.
      </Subtitle>
    </Container>
  );
}

export default Footer;
