import type {
  AssetResponse,
  DownloadAssetResponse,
  FetchAssetsParams,
  FetchResponse,
} from '~/types';

export function fetchAssetsListAPI(params: FetchAssetsParams) {
  return useApiFetch<FetchResponse<AssetResponse>>('/v3/search', {
    params,
  });
}

export function downloadAssetAPI(uuid: string, format: string) {
  return useApiFetch<FetchResponse<DownloadAssetResponse>>(
    `https://api.iconscout.com/v3/items/${uuid}/api-download`,
    { method: 'POST', body: { format } }
  );
}
