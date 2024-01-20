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

// Obsługa płynnego przewijania navbara dla starszych przeglądarek
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
