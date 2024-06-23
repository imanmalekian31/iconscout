export function safeQueryGuard(key: string) {
  const route = useRoute();
  const query = route.query[key];

  return Array.isArray(query) ? query[0] : query;
}
