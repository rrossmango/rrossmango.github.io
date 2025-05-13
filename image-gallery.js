// image-gallery.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-container').forEach(container => {
    const wrapper = container.querySelector('.carousel-track-wrapper');
    const track   = container.querySelector('.carousel-track');
    const leftBtn = container.querySelector('.arrow.left');
    const rightBtn= container.querySelector('.arrow.right');
    const imgs    = Array.from(track.querySelectorAll('img'));

    // shared function to update arrows & centering
    function updateCarouselLayout() {
      if (!imgs.length) return;

      // measure one “slot”
      const gap       = parseFloat(getComputedStyle(track).getPropertyValue('gap'));
      const slotWidth = imgs[0].offsetWidth + gap;
      const itemsPerPage = Math.max(1, Math.floor(wrapper.offsetWidth / slotWidth));

      if (imgs.length <= itemsPerPage) {
        // too few items → center and hide arrows
        container.classList.add('centered');
        leftBtn.style.display = 'none';
        rightBtn.style.display= 'none';
      } else {
        // enough items → normal left-align and show arrows
        container.classList.remove('centered');
        leftBtn.style.display = '';
        rightBtn.style.display= '';
      }
    }

    // initial layout & on resize
    updateCarouselLayout();
    window.addEventListener('resize', updateCarouselLayout);

    // bind arrow clicks
    leftBtn.addEventListener('click', () => scrollByPage(wrapper, track, -1));
    rightBtn.addEventListener('click', () => scrollByPage(wrapper, track, +1));
  });
});

function scrollByPage(wrapper, track, direction) {
  const imgs = Array.from(track.querySelectorAll('img'));
  if (!imgs.length) return;

  const gap       = parseFloat(getComputedStyle(track).getPropertyValue('gap'));
  const slotWidth = imgs[0].offsetWidth + gap;
  const itemsPerPage = Math.max(1, Math.floor(wrapper.offsetWidth / slotWidth));
  const scrollAmount  = slotWidth * itemsPerPage;

  wrapper.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
