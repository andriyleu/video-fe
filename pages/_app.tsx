import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Navbar } from "react-bootstrap";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">YouVideo</Navbar.Brand>
        </Container>
      </Navbar>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
