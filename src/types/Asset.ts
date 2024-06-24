import type { AssetType, PriceType, SortType } from './Filter';

export interface FetchAssetsParams {
  page: number;
  per_page: number;
  query?: string;
  asset?: AssetType;
  price?: PriceType;
  sort?: SortType;
}

export interface AssetResponse {
  items: AssetList;
}

export interface AssetList {
  current_page: number;
  data: Asset[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface Asset {
  id: number;
  uuid: string;
  asset: AssetType;
  name: string;
  slug: string;
  price: number;
  _score: number;
  urls: Urls | Thumb;
  color_codes: ColorCode[];
  hover: boolean;
}

export interface Urls {
  png_64: string;
  png_128: string;
  png_256: string;
}

export interface Thumb {
  thumb: string;
  original?: string;
}

export interface ColorCode {
  decimal_color: number;
  color_id: number;
}

export interface DownloadAssetResponse {
  download: DownloadAsset;
  message: string;
}

export interface DownloadAsset {
  url: string;
  name: string;
  download_url: string;
  download_license_uuid: string | null;
}
