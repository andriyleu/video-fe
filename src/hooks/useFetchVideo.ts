import { API_ENDPOINT } from "api/client";
import { ItemResponse } from "types/pagination";
import { Video } from "types/video";
import { useQuery } from "react-query";

const fetchVideo = (id: string) => fetch(`${API_ENDPOINT}/videos/${id}`);

export const useFetchVideo = (id?: string) => {
  const response = useQuery<ItemResponse<Video>>(
    ["video", id],
    async () => {
      const response = await fetchVideo(id!);
      return response.json();
    },
    {
      enabled: (id?.length ?? 0) > 0,
    }
  );

  return {
    ...response,
    video: response.data?.data,
  };
};
