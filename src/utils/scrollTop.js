export function scrollToTop(scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else clearInterval(scrollInterval);
  }, 15);
}
