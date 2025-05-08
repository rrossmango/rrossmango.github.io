// Simple horizontal scrolling
let scrollIndex = 0;

function scrollCarousel(direction) {
  const wrapper = document.querySelector('.carousel-track-wrapper');
  const track   = document.querySelector('.carousel-track');
  const imgs    = Array.from(track.querySelectorAll('img'));
  if (!imgs.length) return;

  // pixel size of one “slot” = image width + gap
  const gap       = parseFloat(getComputedStyle(track).getPropertyValue('gap'));
  const slotWidth = imgs[0].offsetWidth + gap;

  // how many slots fit fully into the wrapper
  const itemsPerPage = Math.floor(wrapper.offsetWidth / slotWidth);
  if (itemsPerPage < 1) return;

  // scroll by exactly one “page” of items
  const scrollAmount = slotWidth * itemsPerPage;

  wrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

function getVisibleCount() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 500) return 2;
  if (screenWidth < 800) return 3;
  return 5;
}

window.addEventListener('resize', () => scrollCarousel(0)); // reset transform on resize

// function scrollCarousel(direction) {
//   const trackWrapper = document.querySelector('.carousel-track-wrapper');
//   const track = document.querySelector('.carousel-track');
//   const images = track.querySelectorAll('img');

//   if (images.length === 0) return;

//   const imageWidth = images[0].offsetWidth + 16; // account for gap
//   const wrapperWidth = trackWrapper.offsetWidth;
//   const imagesPerView = Math.floor(wrapperWidth / imageWidth);

//   const scrollAmount = imageWidth * imagesPerView;

//   trackWrapper.scrollBy({
//     left: direction * scrollAmount,
//     behavior: 'smooth'
//   });
// }