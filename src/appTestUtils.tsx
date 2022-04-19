import { QueryClient, QueryClientProvider } from "react-query";
import React, { ReactElement, ReactNode } from "react";
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

export const customRender = (
  component: ReactElement,
  { ...renderOptions }: any = {}
) => {
  const Wrap = renderOptions.wrapper;

  const Wrapper = ({ children }: { children: ReactNode }) => {
    const ch = Wrap ? <Wrap>{children}</Wrap> : children;
    return <QueryClientProvider client={queryClient}>{ch}</QueryClientProvider>;
  };

  return rtlRender(component, { ...renderOptions, wrapper: Wrapper });
};

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole("progressbar")], {
    timeout: 4000,
  });

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render method
export { customRender as render, waitForLoadingToFinish };
