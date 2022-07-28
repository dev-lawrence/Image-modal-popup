const modal = document.querySelector('#modal');
const preview = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

// Loop around all the preview images
preview.forEach((preview) => {
  // add an eventlistener to each image
  preview.addEventListener('click', () => {
    // add the class of show to the modal
    modal.classList.add('show');
    // add the class of open to the original
    original.classList.add('open');
    // Dynamically change text and image
    const originalSrc = preview.getAttribute('data-original');
    original.src = originalSrc;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

// add click event to the modal
modal.addEventListener('click', (e) => {
  // target the class that has the class of modal-container
  if (e.target.classList.contains('modal-container')) {
    modal.classList.remove('show');
    original.classList.remove('open');
  }
});
