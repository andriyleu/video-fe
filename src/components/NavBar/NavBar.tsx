import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">YouVideo</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
