import { render, screen } from "appTestUtils";

import { EXAMPLE_VIDEOS } from "fixtures/videos";
import { VideosList } from "components/VideosList";

describe("VideoList", () => {
  beforeEach(() => {
    render(<VideosList videos={EXAMPLE_VIDEOS} />);
  });

  it.each(EXAMPLE_VIDEOS)("render video %s", (video) => {
    expect(screen.getByText(video.attributes.title)).toBeVisible();
    expect(screen.getByText(video.attributes.description)).toBeVisible();
    expect(screen.getByAltText(video.attributes.description)).toHaveAttribute(
      "src",
      video.attributes.thumbnail
    );
  });
});
