import { useMutation, useQueryClient } from "react-query";

import { Video } from "types/video";
import apiClient from "api/client";

const putVideo = (id: string, params: Partial<Video>) =>
  apiClient.put(`/videos/${id}`, {
    data: {
      ...params,
    },
  });

export const useEditVideo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation((newTodo: Partial<Video>) => putVideo(id, newTodo), {
    onSettled: () => queryClient.refetchQueries(["video", id]),
  });
};
