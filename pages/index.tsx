import type { NextPage } from "next";
import { Video } from "types/Video";
import { VideoPlayer } from "components/VideoPlayer";
import { VideosList } from "components/VideosList";

const EXAMPLE_VIDEO: Video = {
  title: "test",
  url: "http://techslides.com/demos/sample-videos/small.mp4",
  isPublic: true,
  slug: "asdasdasd",
  createdAt: "2022-04-17T14:57:56.000Z",
  updatedAt: "2022-04-18T16:47:38.030Z",
  publishedAt: "2022-04-17T14:59:31.554Z",
  description: "test",
  thumbnail:
    "https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
};

const Home: NextPage = () => {
  return (
    <VideosList
      videos={[EXAMPLE_VIDEO, EXAMPLE_VIDEO, EXAMPLE_VIDEO, EXAMPLE_VIDEO]}
    />
  );
};

export default Home;
