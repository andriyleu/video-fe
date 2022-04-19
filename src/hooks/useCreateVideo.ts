import { useMutation, useQueryClient } from "react-query";

import { API_ENDPOINT } from "api/client";
import { Video } from "types/video";

const postVideo = (params: Partial<Video>) =>
  fetch(`${API_ENDPOINT}/videos`, {
    method: "POST",
    body: JSON.stringify({
      data: params,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const useCreateVideo = () => {
  const queryClient = useQueryClient();
  return useMutation((video: Partial<Video>) => postVideo(video), {
    onSettled: () => queryClient.refetchQueries("videos"),
  });
};
