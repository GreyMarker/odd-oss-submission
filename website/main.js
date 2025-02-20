document.querySelector('.burger-menu').addEventListener('click', function() {
    const menuEntries = document.querySelector('.menu-entries');
    menuEntries.classList.toggle('open'); // Toggle the 'open' class
});


// JavaScript for Slider Functionality
const slider = document.querySelector('.card-slider-list');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let scrollAmount = 0;

nextButton.addEventListener('click', () => {
  const cardWidth = document.querySelector('.card-slider-item').offsetWidth;
  const containerWidth = slider.offsetWidth;
  const maxScroll = slider.scrollWidth - containerWidth;
  
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

prevButton.addEventListener('click', () => {
  const cardWidth = document.querySelector('.card-slider-item').offsetWidth;
  scrollAmount = Math.max(scrollAmount - cardWidth, 0);
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

// Optional: Handle scroll events to update button states
slider.addEventListener('scroll', () => {
  const { scrollLeft, scrollWidth, clientWidth } = slider;
  prevButton.disabled = scrollLeft === 0;
  nextButton.disabled = scrollLeft >= scrollWidth - clientWidth;
});