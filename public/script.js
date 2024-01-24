// Listening for the 'DOMContentLoaded' event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Selecting the scroll indicator element
  const swipeIndicator = document.querySelector('.scroll-indicator');
  // Selecting the header element
  const header = document.querySelector('.header');

  // Creating an IntersectionObserver to watch visibility changes of the header
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Toggle the 'fade-out' class based on header visibility
      if (entry.isIntersecting) {
        swipeIndicator.classList.remove('fade-out');
      } else {
        swipeIndicator.classList.add('fade-out');
      }
    });
  }, { threshold: 0.99 }); // Setting a threshold close to 1 for precise detection

  // Starting to observe the header element
  observer.observe(header);
});

// Second 'DOMContentLoaded' event listener for smooth scroll functionality
document.addEventListener('DOMContentLoaded', () => {
  // Selecting all navigation links that link to an ID on the page
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Preventing the default anchor behavior

      // Smooth scrolling to the section linked in the href attribute of the anchor
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Adding an event listener for the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Preventing the default form submission behavior

  // Extracting email and message values from the form
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Sending a POST request to the '/send-email' endpoint
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, message })
  })
  .then(response => response.text())
  .then(data => {
    // Alerting the user on successful message send
    alert('Wiadomość wysłana!');
  })
  .catch((error) => {
    // Handling errors and alerting the user
    console.error('Błąd:', error);
    alert('Błąd wysyłania wiadomości');
  });
});
