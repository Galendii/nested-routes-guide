import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Container,
  LogoHolder,
  Title,
  AnchorsHolder,
  Anchor,
  Button,
} from "./styles";

function Navbar() {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("access") === "admin"
  );
  const history = useHistory();

  const onClick = useCallback(() => {
    switch (localStorage.getItem("access")) {
      case "admin":
        localStorage.setItem("access", "user");
        setIsAdmin(false);
        toast.warn("You've been logged out");
        history.push("/");
        break;

      default:
        localStorage.setItem("access", "admin");
        setIsAdmin(true);
        break;
    }
  }, []);

  return (
    <Container>
      <LogoHolder>
        <Title>Routing Project</Title>
      </LogoHolder>
      <AnchorsHolder>
        <Anchor href="/home">Home</Anchor>
        <Anchor href="/admin">Admin</Anchor>
        <Button onClick={onClick}>{isAdmin ? "Logout" : "Login"}</Button>
      </AnchorsHolder>
    </Container>
  );
}

export default Navbar;
