import type { AssetResponse, FetchAssetsParams, FetchResponse } from '~/types';

export function fetchAssetsListAPI(params: FetchAssetsParams) {
  const url = params.asset === 'lottie' ? '/v2/new-search' : '/v3/search';

  return useApiFetch<FetchResponse<AssetResponse>>(url, {
    params,
  });
}
