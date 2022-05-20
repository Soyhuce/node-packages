type Nullable<T> = T | null

type LaravelPaginationMeta = LaravelPaginationDefaultMeta | LaravelPaginationClassicMeta

interface LaravelPaginationDefaultMeta {
  currentPage: number
  from: Nullable<number>
  path: string
  perPage: number
  to: Nullable<number>
}

interface LaravelPaginationClassicMeta extends LaravelPaginationDefaultMeta {
  lastPage: number
  total: number
}

interface LaravelPaginationLinks {
  first: string
  last: Nullable<string>
  next: Nullable<string>
  prev: Nullable<string>
}

interface LaravelResponse<D> extends Record<string, unknown> {
  data: Nullable<D>
  meta?: Nullable<LaravelPaginationMeta>
  links?: Nullable<LaravelPaginationLinks>
}

export type { LaravelResponse, LaravelPaginationMeta, LaravelPaginationLinks }
