export type ItemResponse<T> = {
  data: { id: number; attributes: T };
};

export type PaginatedResponse<T> = {
  data: [{ id: number; attributes: T }];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
