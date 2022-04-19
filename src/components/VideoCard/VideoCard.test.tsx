import { render, screen } from "@testing-library/react";

import { EXAMPLE_VIDEO } from "fixtures/videos";
import { VideoCard } from "./VideoCard";

describe("VideoCard", () => {
  beforeEach(() => {
    render(<VideoCard video={EXAMPLE_VIDEO} />);
  });

  it("should display thumbnail", () => {
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      EXAMPLE_VIDEO.thumbnail
    );
  });

  it("should display title", () => {
    expect(screen.getByText(EXAMPLE_VIDEO.title)).toBeVisible();
  });

  it("should display description", () => {
    expect(screen.getByText(EXAMPLE_VIDEO.description)).toBeVisible();
  });
});
