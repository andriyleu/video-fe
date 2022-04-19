import { EXAMPLE_SUBMIT_VALUE, EXAMPLE_VIDEO } from "fixtures/videos";
import { fireEvent, render, screen, waitFor } from "appTestUtils";

import { EditVideoPopUp } from "components/EditVideoPopUp";
import { VideosList } from "components/VideosList";
import { useEditVideo } from "hooks/useEditVideo";

jest.mock("hooks/useEditVideo", () => ({
  useEditVideo: jest.fn(),
}));

describe("EditVideoPopUp", () => {
  it("should display inputs for each of the video properties", () => {
    render(<EditVideoPopUp id={"test"} defaultValues={EXAMPLE_VIDEO} />);
    fireEvent.click(screen.getByRole("button", { name: "Edit video" }));

    expect(screen.getByLabelText("Title")).toBeVisible();
    expect(screen.getByLabelText("Description")).toBeVisible();
    expect(screen.getByLabelText("Url")).toBeVisible();
    expect(screen.getByLabelText("Thumbnail")).toBeVisible();
    expect(screen.getByLabelText("Is public?")).toBeVisible();
  });

  it("should display values of the editing video", () => {
    render(<EditVideoPopUp id={"test"} defaultValues={EXAMPLE_VIDEO} />);
    fireEvent.click(screen.getByRole("button", { name: "Edit video" }));

    expect(screen.getByDisplayValue(EXAMPLE_VIDEO.title)).toBeVisible();
    expect(screen.getByDisplayValue(EXAMPLE_VIDEO.description)).toBeVisible();
    expect(screen.getByDisplayValue(EXAMPLE_VIDEO.url)).toBeVisible();
    expect(screen.getByDisplayValue(EXAMPLE_VIDEO.thumbnail)).toBeVisible();
    expect(screen.getByLabelText("Is public?")).toHaveProperty(
      "checked",
      EXAMPLE_VIDEO.isPublic
    );
  });

  it("should call mutation onSubmit", async () => {
    const mutate = jest.fn();
    (useEditVideo as jest.Mock).mockImplementation(() => ({ mutate }));

    render(<EditVideoPopUp id={"test"} defaultValues={EXAMPLE_VIDEO} />);

    fireEvent.click(screen.getByRole("button", { name: "Edit video" }));

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.title },
    });

    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.description },
    });

    fireEvent.change(screen.getByLabelText("Url"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.url },
    });

    fireEvent.change(screen.getByLabelText("Thumbnail"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.thumbnail },
    });

    fireEvent.change(screen.getByLabelText("Thumbnail"), {
      target: { value: EXAMPLE_SUBMIT_VALUE.thumbnail },
    });

    fireEvent.click(screen.getByLabelText("Is public?"));

    fireEvent.click(screen.getByRole("button", { name: "Edit" }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        ...EXAMPLE_VIDEO,
        ...EXAMPLE_SUBMIT_VALUE,
      });
    });
  });
});
