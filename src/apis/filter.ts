import type { AssetResponse, FetchAssetsParams, FetchResponse } from '~/types';

export function fetchAssetsListAPI(params: FetchAssetsParams) {
  return useApiFetch<FetchResponse<AssetResponse>>('/v3/search', { params });
}
