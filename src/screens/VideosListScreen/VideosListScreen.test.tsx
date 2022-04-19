import {
  EXAMPLE_VIDEO,
  EXAMPLE_VIDEOS_RESPONSE,
  EXAMPLE_VIDEO_RESPONSE,
} from "fixtures/videos";
import { render, screen, waitForLoadingToFinish } from "appTestUtils";

import { VideosListScreen } from "screens/VideosListScreen";
import fetchMock from "fetch-mock";

describe("VideosListScreen", () => {
  it("should fetch and display list of videos", async () => {
    fetchMock.get(/videos/, { status: 200, body: EXAMPLE_VIDEOS_RESPONSE });
    render(<VideosListScreen />);

    await waitForLoadingToFinish();

    EXAMPLE_VIDEOS_RESPONSE.data.forEach(({ attributes }) => {
      expect(screen.getByAltText(attributes.description)).toHaveAttribute(
        "src",
        attributes.thumbnail
      );
      expect(screen.getByText(attributes.title)).toBeVisible();
      expect(screen.getByText(attributes.description)).toBeVisible();
    });
  });
});
