import { EXAMPLE_VIDEO, EXAMPLE_VIDEO_RESPONSE } from "fixtures/videos";
import { render, screen, waitForLoadingToFinish } from "appTestUtils";

import { VideoDetailsScreen } from "screens/VideoDetailsScreen";
import fetchMock from "fetch-mock";

describe("VideoDetailsScreen", () => {
  it("should fetch and display video related info", async () => {
    fetchMock.get(/videos/, EXAMPLE_VIDEO_RESPONSE);

    render(<VideoDetailsScreen id="test" />);

    await waitForLoadingToFinish();
    expect(screen.getByRole("interactive").children[0]).toHaveAttribute(
      "src",
      EXAMPLE_VIDEO.url
    );
    expect(screen.getByText(EXAMPLE_VIDEO.title)).toBeVisible();
    expect(screen.getByText(EXAMPLE_VIDEO.description)).toBeVisible();
  });
});
