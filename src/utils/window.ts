export const refreshPage = () => {
  window.location.reload();
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
