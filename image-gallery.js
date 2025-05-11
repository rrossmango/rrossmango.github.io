// image-gallery.js

document.addEventListener('DOMContentLoaded', () => {
    // Find every carousel on the page
    document.querySelectorAll('.carousel-container').forEach(container => {
      const wrapper = container.querySelector('.carousel-track-wrapper');
      const track   = container.querySelector('.carousel-track');
      const leftBtn  = container.querySelector('.arrow.left');
      const rightBtn = container.querySelector('.arrow.right');
  
      // Guard in case someone forgot a button or markup
      if (!wrapper || !track || !leftBtn || !rightBtn) return;
  
      // Hook up the two buttons for this container
      leftBtn.addEventListener('click', () => scrollByPage(wrapper, track, -1));
      rightBtn.addEventListener('click', () => scrollByPage(wrapper, track, +1));
    });
  });
  
  function scrollByPage(wrapper, track, direction) {
    const imgs = Array.from(track.querySelectorAll('img'));
    if (imgs.length === 0) return;
  
    // Read the gap dynamically from CSS (in px)
    const gap = parseFloat(getComputedStyle(track).getPropertyValue('gap'));
    const slotWidth = imgs[0].offsetWidth + gap;
  
    // How many full slots fit in view
    const itemsPerPage = Math.max(1, Math.floor(wrapper.offsetWidth / slotWidth));
  
    // Total distance to scroll = (slot + gap) * itemsPerPage
    const scrollAmount = slotWidth * itemsPerPage;
  
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  