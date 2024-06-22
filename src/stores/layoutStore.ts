export const useLayoutStore = defineStore('layout', () => {
  const toggleSidebar = ref(true);
  const toggleDotLottie = ref(false);

  return {
    toggleSidebar,
    toggleDotLottie,
  };
});
