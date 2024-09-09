document.addEventListener('DOMContentLoaded', function() {
    const imageCardsContainer = document.getElementById('scrolling-images');
    
    // Clone the image cards to create a seamless scroll effect
    const clones = imageCardsContainer.cloneNode(true);
    imageCardsContainer.appendChild(clones);
  });
  