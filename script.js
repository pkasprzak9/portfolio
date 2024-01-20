document.addEventListener('DOMContentLoaded', () => {
  const swipeIndicator = document.querySelector('.scroll-indicator');
  const header = document.querySelector('.header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swipeIndicator.classList.remove('fade-out');
      } else {
        swipeIndicator.classList.add('fade-out');
      }
    });
  }, { threshold: 0.99 }); // Możemy spróbować z wartością bliską 1, np. 0.99

  observer.observe(header);
});
