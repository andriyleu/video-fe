export const EXAMPLE_SUBMIT_VALUE = {
  title: "title",
  description: "description",
  url: "url",
  thumbnail: "thumbnail",
  isPublic: false,
};

export const EXAMPLE_VIDEO = {
  title: "w0t",
  url: "http://techslides.com/demos/sample-videos/small.mp4",
  isPublic: true,
  slug: "slug1",
  createdAt: "2022-04-17T14:57:56.000Z",
  updatedAt: "2022-04-18T19:08:45.028Z",
  publishedAt: "2022-04-17T14:59:31.554Z",
  description: "test2",
  thumbnail:
    "https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
};

export const SECOND_VIDEO = {
  title: "2do video",
  url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  isPublic: true,
  slug: "slug2",
  createdAt: "2022-04-18T19:45:19.650Z",
  updatedAt: "2022-04-18T19:45:19.650Z",
  publishedAt: "2022-04-18T19:45:19.647Z",
  description: "hola",
  thumbnail: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
};

export const EXAMPLE_VIDEOS = [
  { id: 1, attributes: EXAMPLE_VIDEO },
  { id: 2, attributes: SECOND_VIDEO },
];

export const EXAMPLE_VIDEOS_RESPONSE = {
  data: EXAMPLE_VIDEOS,
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};

export const EXAMPLE_VIDEO_RESPONSE = {
  data: { id: 1, attributes: EXAMPLE_VIDEO },
  meta: {},
};
