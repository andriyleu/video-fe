import { render, screen } from "../../appTestUtils";

import { NavBar } from "./NavBar";

describe("Navbar", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it("should display app title", () => {
    const title = screen.getByText("YouVideo");
    expect(title).toBeVisible();
    expect(title).toHaveAttribute("href", "/");
  });
});
