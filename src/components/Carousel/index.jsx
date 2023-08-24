//carousel a venir

import React, { useState } from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // ... Ajoutez d'autres noms d'images ici ...
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className='carousel'>
      <button onClick={handlePrevious} disabled={currentImageIndex === 0}>
        Previous
      </button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
      <button onClick={handleNext} disabled={currentImageIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
}

export default Carousel;