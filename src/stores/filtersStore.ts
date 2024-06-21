import { fetchAssetsListAPI } from '~/apis';
import type {
  Asset,
  AssetType,
  FetchAssetsParams,
  PriceType,
  sortType,
} from '~/types';

import { IdToPath } from '../components/filters/constants';

export const useFiltersStore = defineStore('filters', () => {
  const router = useRouter();
  const route = useRoute();

  const assetsList = ref<Asset[]>([]);
  const isLoading = ref(false);
  const filters = ref<{ asset: AssetType; sort?: sortType; price?: PriceType }>(
    {
      asset: 'all',
      price: 'all',
      sort: 'relevant',
    }
  );

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
      page: page,
      per_page: per_page,
      asset: asset === 'all' ? undefined : asset,
      price: price === 'all' ? undefined : price,
      sort: sort,
      query: query,
    })
      .then((data) => {
        assetsList.value.push(...data.response.items.data);
      })
      .finally(() => (isLoading.value = false));
  }

  watch(
    filters,
    (newVal) => {
      // change route with change asset type filter
      router.push({
        name: 'type',
        params: {
          type: IdToPath[newVal.asset],
        },
        query: { ...route.query },
      });

      fetchAssets({
        ...newVal,
        per_page: 30,
        page: 1,
      });
    },
    { deep: true }
  );

  return {
    filters,
    assetsList,
  };
});
