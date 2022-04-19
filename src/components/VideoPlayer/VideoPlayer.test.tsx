import { render, screen } from "appTestUtils";

import { EXAMPLE_VIDEO } from "fixtures/videos";
import { VideoPlayer } from "components/VideoPlayer";

describe("VideoPlayer", () => {
  beforeEach(() => {
    render(<VideoPlayer video={EXAMPLE_VIDEO} />);
  });

  it("should display video", () => {
    expect(screen.getByRole("interactive").children[0]).toHaveAttribute(
      "src",
      EXAMPLE_VIDEO.url
    );
  });

  it("should display title", () => {
    expect(screen.getByText(EXAMPLE_VIDEO.title)).toBeVisible();
  });

  it("should display description", () => {
    expect(screen.getByText(EXAMPLE_VIDEO.description)).toBeVisible();
  });
});
