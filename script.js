// Scroll animation (fade/slide)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Slider functionality
const slider = document.querySelector('.slider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -620, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 620, behavior: 'smooth' });
});
