import { fireEvent, render, screen, waitFor } from "appTestUtils";

import { CreateVideoPopUp } from "components/CreateVideoPopUp";
import { EXAMPLE_SUBMIT_VALUE } from "fixtures/videos";
import { useCreateVideo } from "hooks/useCreateVideo";

jest.mock("hooks/useCreateVideo", () => ({
  useCreateVideo: jest.fn(),
}));

describe("CreateVideoPopUp", () => {
  it("should display inputs for each of the video properties", () => {
    render(<CreateVideoPopUp />);

    fireEvent.click(screen.getByRole("button", { name: "Create video" }));

    expect(screen.getByLabelText("Title")).toBeVisible();
    expect(screen.getByLabelText("Description")).toBeVisible();
    expect(screen.getByLabelText("Url")).toBeVisible();
    expect(screen.getByLabelText("Thumbnail")).toBeVisible();
    expect(screen.getByLabelText("Is public?")).toBeVisible();
  });

  it("should call mutation onSubmit", async () => {
    const mutate = jest.fn();
    (useCreateVideo as jest.Mock).mockImplementation(() => ({ mutate }));

    render(<CreateVideoPopUp />);

    fireEvent.click(screen.getByRole("button", { name: "Create video" }));

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

    fireEvent.click(screen.getByRole("button", { name: "Create" }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith(EXAMPLE_SUBMIT_VALUE);
    });
  });
});
