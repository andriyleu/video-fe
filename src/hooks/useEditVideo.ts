import { useMutation, useQueryClient } from "react-query";

import { API_ENDPOINT } from "api/constants";
import { Video } from "types/video";

const putVideo = (id: string, params: Partial<Video>) =>
  fetch(`${API_ENDPOINT}/videos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      data: params,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const useEditVideo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation((video: Partial<Video>) => putVideo(id, video), {
    onSettled: () => queryClient.refetchQueries(["video", id]),
  });
};
