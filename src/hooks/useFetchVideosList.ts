import { AxiosResponse } from "axios";
import { PaginatedResponse } from "types/pagination";
import { Video } from "types/video";
import apiClient from "api/client";
import { useQuery } from "react-query";

const fetchVideosList = () => apiClient.get("/videos");

export const useFetchVideosList = () => {
  const response = useQuery<AxiosResponse<PaginatedResponse<Video>>>(
    "videos",
    () => fetchVideosList()
  );

  return {
    ...response,
    videos: response.data?.data,
  };
};
