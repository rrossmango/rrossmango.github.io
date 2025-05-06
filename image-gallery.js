// Simple horizontal scrolling
let scrollIndex = 0;

function scrollCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const visibleCount = getVisibleCount();
  const maxIndex = images.length - visibleCount;

  scrollIndex += direction;
  scrollIndex = Math.max(0, Math.min(scrollIndex, maxIndex));

  const scrollAmount = images[0].offsetWidth + 16; // image width + gap
  track.style.transform = `translateX(-${scrollIndex * scrollAmount}px)`;
}

function getVisibleCount() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 500) return 2;
  if (screenWidth < 800) return 3;
  return 5;
}

window.addEventListener('resize', () => scrollCarousel(0)); // reset transform on resize