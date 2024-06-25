import type { SidebarOption, Tab } from '~/types';

export const IdToPath = {
  all: '',
  lottie: 'animations',
  '3d': '3d-illustrations',
  illustration: 'illustrations',
  icon: 'icons',
};

export const TABS: Tab[] = [
  {
    id: 'all',
    name: 'All Assets',
    path: IdToPath.all,
  },
  {
    id: '3d',
    name: '3D Illustrations',
    path: IdToPath['3d'],
  },
  {
    id: 'lottie',
    name: 'Lottie Animations',
    path: IdToPath.lottie,
  },
  {
    id: 'illustration',
    name: 'Illustrations',
    path: IdToPath.illustration,
  },
  {
    id: 'icon',
    name: 'Icons',
    path: IdToPath.icon,
  },
];

export const filters: SidebarOption[] = [
  {
    name: 'asset',
    title: 'Asset Type',
    options: [
      { id: 'all', title: 'All Assets' },
      { id: 'lottie', title: 'Lottie Animations' },
      { id: '3d', title: '3D Illustrations' },
      { id: 'illustration', title: 'Illustrations' },
      { id: 'icon', title: 'Icons' },
    ],
  },
  {
    name: 'price',
    title: 'Price',
    options: [
      { id: 'free', title: 'Free' },
      { id: 'premium', title: 'Premium' },
      { id: 'all', title: 'All' },
    ],
  },
  {
    name: 'sort',
    title: 'Sort by',
    options: [
      { id: 'popular', title: 'Popular' },
      { id: 'latest', title: 'Recent' },
      { id: 'featured', title: 'Featured' },
      { id: 'relevant', title: 'Relevant' },
    ],
  },
];
