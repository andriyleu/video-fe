import "@testing-library/jest-dom/extend-expect";

import fetch from "node-fetch";
import fetchMock from "fetch-mock";

afterEach(() => {
  fetchMock.reset();
  fetchMock.flush();
});
