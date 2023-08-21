import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import appartements from '../datas/appartementList';
import flecheHaute from '../../assets/flecheHaute.png'

function AppartementDetailPage() {
  const { id } = useParams();
  const selectedAppartement = appartements.find((appartement) => appartement.id === id);

  if (!selectedAppartement) {
    return <p>L'appartement correspondant n'a pas été trouvé.</p>;
  }

  const { title, location, description, pictures, host, rating, equipments, tags  } = selectedAppartement;


  return (
  <div key={id} className='logement'>
    <div className='logement__carroussel'><img src={pictures} alt={title}/></div>
    <div className='logement__title'><h1>{title}</h1><p>{location}</p></div>
    <div className='host'>
    <p>{host.name}</p>
    <img src={host.picture} alt={host.name}/>
    </div>
    <div className='logement__tags'>
        {selectedAppartement.tags.map((tag) => (
          <p>{tag}</p>
        ))}
    </div>
    <div className='logement__ratings'>{rating}</div>
    <div className='logement__description'>
            <p className='propos__closed--para'>Description</p>
            <button className="bouton">
              <img
                className='propos__closed--logo cursor'
                src={flecheHaute}
                alt="Flèche déroulante"
              />
            </button>
            <p>{description}</p>
          </div>
    <div className='logement__equipement'></div>
    <div className='logement__equipement'>
            <p>Description</p>
            <button className="bouton">
              <img
                src={flecheHaute}
                alt="Flèche déroulante"
              />
            </button>
            <p>{selectedAppartement.equipments.map((equipment) => (
          <p>{equipment}</p>
        ))}</p>
          </div>
      
      
      <div>
       
      </div>
    </div>
  );
}

export default AppartementDetailPage;


