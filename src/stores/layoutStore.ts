export const useLayoutStore = defineStore('layout', () => {
  const toggleSidebar = ref(true);

  return {
    toggleSidebar,
  };
});
