import { API_ENDPOINT } from "api/client";
import { PaginatedResponse } from "types/pagination";
import { Video } from "types/video";
import { useQuery } from "react-query";

const fetchVideosList = () => fetch(`${API_ENDPOINT}/videos`);

export const useFetchVideosList = () => {
  const response = useQuery<PaginatedResponse<Video>>("videos", async () => {
    const response = await fetchVideosList();
    return response.json();
  });

  return {
    ...response,
    videos: response.data?.data,
  };
};
