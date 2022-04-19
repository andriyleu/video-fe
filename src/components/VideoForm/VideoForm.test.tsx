import { fireEvent, render, screen, waitFor } from "appTestUtils";

import { EXAMPLE_SUBMIT_VALUE } from "fixtures/videos";
import { VideoForm } from "components/VideoForm";

const SUBMIT_ACTION = "submit";

describe("VideoForm", () => {
  it("should display inputs for each of the video properties", () => {
    render(<VideoForm actionTitle="test" onSubmit={() => undefined} />);
    expect(screen.getByLabelText("Title")).toBeVisible();
    expect(screen.getByLabelText("Description")).toBeVisible();
    expect(screen.getByLabelText("Url")).toBeVisible();
    expect(screen.getByLabelText("Thumbnail")).toBeVisible();
    expect(screen.getByLabelText("Is public?")).toBeVisible();
  });

  it("should be able to fill and click on submit", async () => {
    const onSubmitMock = jest.fn();
    render(<VideoForm actionTitle={SUBMIT_ACTION} onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.title },
    });

    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.description },
    });

    fireEvent.change(screen.getByLabelText("Url"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.url },
    });

    fireEvent.change(screen.getByLabelText("Slug"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.slug },
    });

    fireEvent.change(screen.getByLabelText("Thumbnail"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.thumbnail },
    });

    fireEvent.click(screen.getByRole("button", { name: SUBMIT_ACTION }));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(EXAMPLE_SUBMIT_VALUE);
    });
  });
});
