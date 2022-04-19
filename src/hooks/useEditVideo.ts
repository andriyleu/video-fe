import { useMutation, useQueryClient } from "react-query";

import { Video } from "types/video";
import apiClient from "api/client";

const putVideo = (id: string, params: Partial<Video>) =>
  fetch(`/videos/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      ...params,
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
