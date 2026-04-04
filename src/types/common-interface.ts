interface Paging {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface WebResponse<T = unknown> {
  message?: string;
  errors?: string;
  data?: T;
  paging?: Paging;
}

interface PaginationDto {
  page?: number;
  limit?: number;
}

export type { WebResponse, PaginationDto };
