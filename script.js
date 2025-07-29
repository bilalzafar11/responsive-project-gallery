// Scroll-to-Top Button Functionality
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Animation for Gallery Cards (Fade-in on Scroll)
const cards = document.querySelectorAll('.gallery-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Trigger only once per card
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% visible
});

cards.forEach(card => observer.observe(card));

// Lightbox Functionality for Enlarging Project Images
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.project-image');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');

    // Clear previous content and add clicked image
    lightbox.innerHTML = '';
    const imgClone = document.createElement('img');
    imgClone.src = img.src;
    lightbox.appendChild(imgClone);
  });
});

// Hide lightbox on outside click
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Dark Mode Toggle Button
const toggleBtn = document.getElementById("darkToggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
