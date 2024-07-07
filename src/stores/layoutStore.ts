export const useLayoutStore = defineStore('layout', () => {
  const route = useRoute();

  const toggleSidebar = ref(true);
  const toggleDotLottie = ref(route.query.isDotLottie === 'true');

  return {
    toggleSidebar,
    toggleDotLottie,
  };
});
