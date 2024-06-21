import type { Tab } from '~/types';

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
