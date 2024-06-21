export type AssetType = 'lottie' | '3d' | 'illustration' | 'icon' | 'all';
export type PriceType = 'free' | 'premium' | 'all';
export type sortType = 'popular' | 'latest' | 'featured' | 'relevant';

export interface SidebarOption {
  name: 'asset' | 'price' | 'sort';
  title: string;
  options: { id: string; title: string }[];
}

export interface Tab {
  id: AssetType;
  name: string;
  path: string;
}
