import { fetchAssetsListAPI } from '~/apis';
import type {
  Asset,
  AssetType,
  FetchAssetsParams,
  PriceType,
  SortType,
} from '~/types';

interface Filters {
  query?: string;
  asset: AssetType;
  sort: SortType;
  price: PriceType;
}

const PER_PAGE: Record<AssetType, number> = {
  all: 30,
  icon: 30,
  lottie: 18,
  '3d': 18,
  illustration: 18,
};

export const useFiltersStore = defineStore('filters', () => {
  const router = useRouter();
  const route = useRoute();

  const assets = reactive<{ data: Asset[]; count: number }>({
    data: [],
    count: 0,
  });
  const loading = ref(false);
  const page = ref(0);
  const filters = ref<Filters>({
    query: safeQueryGuard('query') || undefined,
    asset: (safeQueryGuard('asset') || 'all') as AssetType,
    price: (safeQueryGuard('price') || 'all') as PriceType,
    sort: (safeQueryGuard('sort') || 'relevant') as SortType,
  });

  async function fetchAssets({
    query,
    asset,
    price,
    sort,
    page = 1,
    per_page,
  }: FetchAssetsParams) {
    loading.value = true;

    try {
      const data = await fetchAssetsListAPI({
        page,
        per_page: per_page || PER_PAGE[asset!],
        asset: asset === 'all' ? undefined : asset,
        price: price === 'all' ? undefined : price,
        sort,
        query,
      });

      assets.data.push(...data.response.items.data);
      assets.count = data.response.items.total;
    } catch (error) {
      console.error('Error loading assets:', error);
    } finally {
      loading.value = false;
    }
  }

  function fetchNextPage() {
    if (!loading.value && page.value) {
      page.value += 1;

      fetchAssets({
        ...filters.value,
        page: page.value,
        per_page: PER_PAGE[filters.value.asset],
      });
    }
  }

  watch(
    filters,
    (newVal) => {
      router.push({
        name: 'type',
        params: {
          type: {
            all: '',
            lottie: 'animations',
            '3d': '3d-illustrations',
            illustration: 'illustrations',
            icon: 'icons',
          }[newVal.asset],
        },
        query: {
          ...route.query,
          query: newVal.query || undefined,
          price: newVal.price === 'all' ? undefined : newVal.price,
          sort: newVal.sort === 'relevant' ? undefined : newVal.sort,
        },
      });

      assets.data = [];
      page.value = 1;

      fetchAssets({
        ...newVal,
        page: page.value,
        per_page: PER_PAGE[newVal.asset],
      });
    },
    { deep: true }
  );

  return {
    filters,
    assets,
    fetchNextPage,
    page,
    loading,
  };
});
