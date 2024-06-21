export function useApiFetch<T>(
  url: string,
  options: Record<string, any>
): Promise<T> {
  const RuntimeConfig = useRuntimeConfig();

  const instance = $fetch.create({
    baseURL: RuntimeConfig.public.apiBase,
    headers: {
      'Client-ID': RuntimeConfig.public.iconscoutClientId,
    },
  });

  return instance(url, options);
}
