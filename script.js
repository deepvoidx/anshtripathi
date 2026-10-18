const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const backToTop = document.getElementById('backToTop');
const toggleBackToTop = () => {
  backToTop.classList.toggle('visible', window.scrollY > 520);
};
window.addEventListener('scroll', toggleBackToTop, { passive: true });
toggleBackToTop();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// GitHub Pages fallback for the portrait asset.
document.querySelectorAll('img[src="./pfp.jpg"]').forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = new URL('./assets/pfp.jpg', document.baseURI).href;
    if (img.src !== fallback) img.src = fallback;
  }, { once: true });
});
