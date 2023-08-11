import appartements from '../datas/appartementList'
//import React, { useState } from 'react';
import React from 'react';

function Card() {
  //const [selectedImage, setSelectedImage] = useState(null);

  //const imageClick = (image) => {
    //setSelectedImage(image);
  //};

  return (
    <div className='appart'>
      <ul className='listeAppart'>
        {appartements.map(({ id, cover, title }) => (
          <div key={id}>
            <div
              //className={`appart-card ${selectedImage === cover ? 'selected' : ''}`}
              style={{ backgroundImage: `url(${cover})` }}
              //onClick={() => imageClick(cover)}
            >
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Card;