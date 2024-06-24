import type {
  AssetResponse,
  DownloadAssetResponse,
  FetchAssetsParams,
  FetchResponse,
} from '~/types';

export function fetchAssetsListAPI(params: FetchAssetsParams) {
  const url = params.asset === 'lottie' ? '/v2/new-search' : '/v3/search';

  return useApiFetch<FetchResponse<AssetResponse>>(url, {
    params,
  });
}

export function downloadAssetAPI(uuid: string, format: string) {
  return useApiFetch<FetchResponse<DownloadAssetResponse>>(
    `https://api.iconscout.com/v3/items/${uuid}/api-download`,
    { method: 'POST', body: { format } }
  );
}
