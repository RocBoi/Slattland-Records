// === Smooth Scroll for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// === Scroll Reveal Animations ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.media-card, #new-release').forEach(el => {
  observer.observe(el);
});

// === YouTube Facade Embed Animation ===
document.querySelectorAll('.youtube-facade').forEach(el => {
  el.addEventListener('click', () => {
    const videoId = el.getAttribute('data-id');
    el.innerHTML = `
      <iframe width="100%" height="315" 
              src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white" 
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
              style="border-radius: 12px; box-shadow: 0 0 20px gold;">
      </iframe>`;
    el.classList.add('active');
  });
});

// === Service Worker Registration (Brand Aligned Logging) ===
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('%c[Slattland] Service Worker registered – smooth and secure.', 'color: gold; font-weight: bold;'))
    .catch(err => console.error('%c[Slattland] SW registration failed:', 'color: red;', err));
}
