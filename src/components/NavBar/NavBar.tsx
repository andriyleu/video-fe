import { Container, Navbar } from "react-bootstrap";

import { useRouter } from "next/router";

export const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">YouVideo</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
