// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal effect (starter logic)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
  document.querySelectorAll('.youtube-facade').forEach(el => {
  el.addEventListener('click', () => {
    const videoId = el.getAttribute('data-id');
    el.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>`;
  });
});
}, {
  threshold: 0.1
});

document.querySelectorAll('.media-card').forEach(card => {
  observer.observe(card);
});
