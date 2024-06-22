export function useInfiniteScroll(intersectFunction: Function) {
  const observer = ref<HTMLElement>();
  let observerInstance: IntersectionObserver | null = null;

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      intersectFunction();
    }
  };

  onMounted(() => {
    intersectFunction();
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    observerInstance = new IntersectionObserver(handleIntersect, options);
    if (observer.value) {
      observerInstance.observe(observer.value);
    }
  });

  onUnmounted(() => {
    if (observer.value && observerInstance) {
      observerInstance.unobserve(observer.value);
    }
  });

  return {
    observer,
  };
}
