import { AxiosResponse } from "axios";
import { ItemResponse } from "types/pagination";
import { Video } from "types/video";
import apiClient from "api/client";
import { useQuery } from "react-query";

const fetchVideo = (id: string) => apiClient.get(`/videos/${id}`);

export const useFetchVideo = (id: string) => {
  const response = useQuery<AxiosResponse<ItemResponse<Video>>>(
    ["video", id],
    () => fetchVideo(id),
    {
      enabled: id?.length > 0,
    }
  );

  return {
    ...response,
    video: response.data?.data?.data,
  };
};
