import { fetchAssetsListAPI } from '~/apis';
import type {
  Asset,
  AssetType,
  FetchAssetsParams,
  PriceType,
  sortType,
} from '~/types';

interface Filters {
  asset: AssetType;
  sort?: sortType;
  price?: PriceType;
  page: number;
  dotlottie: boolean;
}

export const useFiltersStore = defineStore('filters', () => {
  const router = useRouter();
  const route = useRoute();

  const assetsList = ref<Asset[]>([]);
  const totalAssets = ref(0);
  const isLoading = ref(false);
  const filters = ref<Filters>({
    asset: 'all',
    price: 'free',
    sort: 'relevant',
    page: 0,
    dotlottie: false,
  });

  async function fetchAssets({
    query,
    asset,
    price,
    sort,
    page,
    per_page,
  }: FetchAssetsParams) {
    isLoading.value = true;

    fetchAssetsListAPI({
      page: page || 1,
      per_page: per_page,
      asset: asset === 'all' ? undefined : asset,
      price: price === 'all' ? undefined : price,
      sort: sort,
      query: query,
    })
      .then((data) => {
        assetsList.value.push(...data.response.items.data);
        totalAssets.value = data.response.items.total;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  function fetchNextPage() {
    if (!isLoading.value) {
      filters.value.page += 1;
    }
  }

  watch(
    filters,
    (newVal) => {
      // change route with change asset type filter
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
        query: { ...route.query },
      });

      fetchAssets({
        ...newVal,
        per_page: ['all', 'icon'].includes(newVal.asset) ? 30 : 18,
      });
    },
    { deep: true }
  );

  return {
    filters,
    assetsList,
    fetchNextPage,
    isLoading,
    totalAssets,
  };
});
