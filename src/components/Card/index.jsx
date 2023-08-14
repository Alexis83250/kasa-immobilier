import appartements from '../datas/appartementList'
//import React, { useState } from 'react';
import React from 'react';
import '../../styles/Card.scss'

function Card() {
  //const [selectedImage, setSelectedImage] = useState(null);

  //const imageClick = (image) => {
    //setSelectedImage(image);
  //};

  return (
    <div className='portfolio'>
      <ul className='portfolio__listeAppart'>
        {appartements.map(({ id, cover, title }) => (
          <div className='portfolio__listeAppart--appart' key={id}>
            <img className='image' src={cover} alt={title} />
            <h3 className='image__title'>{title}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Card;