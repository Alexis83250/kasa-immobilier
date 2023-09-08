import React, { useState } from 'react';
import left from '../../assets/left.png'
import right from '../../assets/right.png'

function Carousel({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    if (currentImageIndex === data.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(data.length - 1); 
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className='logement__carroussel--carou'>
      {data.length > 1 && (
        <button className='left myBtn' onClick={handlePrevious}>
          <img className='btnImg' src={left} alt='vue suivante'/>
        </button>
      )}
      {data.length > 1 && (
        <button className='right myBtn' onClick={handleNext}>
          <img className='btnImg' src={right} alt='vue précédente'/>
        </button>
      )}
      <img className='myImage' src={data[currentImageIndex]} alt={`Vue du logement ${currentImageIndex}`} />
      
      <p className='middle' >{currentImageIndex + 1}/{data.length}</p>
    </div>
  );
}

export default Carousel;