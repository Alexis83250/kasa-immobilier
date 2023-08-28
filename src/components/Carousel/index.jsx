import React, { useState } from 'react';
import left from '../../assets/left.png'
import right from '../../assets/right.png'

function Carousel({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    if (currentImageIndex < data.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  return (
    <div className='logement__carroussel--carou'>
      <button className='left myBtn' onClick={handlePrevious} disabled={currentImageIndex === 0}>
      <img src={left} alt='vue suivante'/>
      </button>
      <img className='myImage' src={data[currentImageIndex]} alt={`Vue du logement ${currentImageIndex}`} />
      <button className='right myBtn' onClick={handleNext} disabled={currentImageIndex === data.length - 1}>
      <img src={right} alt='vue précédente'/>
      </button>
      <p className='middle' >{currentImageIndex + 1}/{data.length}</p>
    </div>
  );
}

export default Carousel;