import appartements from '../datas/appartementList'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Card.scss'

function Card() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className='portfolio'>
      <ul className='portfolio__listeAppart borderCard'>
        {appartements.map(({ id, cover, title }) => (
          <Link to={`/Fiche-Logement/${id}`}  className={`portfolio__listeAppart--appart ${selectedImage === cover ? 'selected' : ''}`} key={id} id={id} onClick={() => imageClick(cover)}>
            <img className='image borderCard' src={cover} alt={title} />
            <div className='image__ombre borderCard'></div>
            <p className='image__title'>{title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Card;