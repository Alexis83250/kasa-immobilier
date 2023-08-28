import { useParams } from 'react-router-dom';
import React from 'react';
import appartements from '../datas/appartementList';
import "../../styles/Logement.scss"
import AppartCollapse from '../DescriptionCollapse'
import EquipmentsCollapse from '../EquipmentCollapse'
import Carousel from '../Carousel/index'
import RatingStar from '../Rating/index'

function AppartementDetailPage() {
  const { id } = useParams();
  const selectedAppartement = appartements.find((appartement) => appartement.id === id);

  if (!selectedAppartement) {
    return <p>L'appartement correspondant n'a pas été trouvé.</p>;
  }

  const { title, location, description, pictures, host, rating, equipments } = selectedAppartement;


  return (
  <div key={id} className='logement'>
    <div className='logement__carroussel'><Carousel data={pictures} id={id} key={id}/></div>
    <div className='logement__div'>
    <div className='logement__title'><h1>{title}</h1><p>{location}</p></div>
    <div className='logement__host'>
    <p className='logement__host--p'>{host.name}</p>
    <img className='logement__host--img' src={host.picture} alt={host.name}/>
    </div>
    </div>
    <div className='logement__div--2'>
    <div className='logement__tags'>
        {selectedAppartement.tags.map((tag, index) => (
          <p className='logement__tags--p' key={index}>{tag}</p>
        ))}
    </div>
    <div className='logement__ratings'><RatingStar data={rating}/></div>
    </div>
    <div className='logement__div--3'>
    <div className='logement__description'>
          <AppartCollapse data={description} id={id} key={id}/>
          </div>
    <div className='logement__equipement'>
        <EquipmentsCollapse data={equipments} id={id} key={id}/>
    </div>
      </div>
      
      <div>
       
      </div>
    </div>
  );
}

export default AppartementDetailPage;


