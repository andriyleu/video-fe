import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import { NavBar } from "components/NavBar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div style={{ margin: "32px" }}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
