export interface FetchResponse<T> {
  status: string;
  response: T;
  meta: Meta;
  elements: null;
  message: null;
}

export interface Meta {
  total_time: number;
  db_query_time: number;
  db_query_count: number;
}
