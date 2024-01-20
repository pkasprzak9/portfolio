document.addEventListener('DOMContentLoaded', () => {
  const swipeIndicator = document.querySelector('.scroll-indicator');
  const aboutSection = document.querySelector('#about');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        swipeIndicator.classList.remove('fade-out');
      } else {
        swipeIndicator.classList.add('fade-out');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(aboutSection);
});
