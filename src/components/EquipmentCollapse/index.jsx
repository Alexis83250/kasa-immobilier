//import appartements from '../datas/appartementList'
import React, { useState } from 'react';
//import '../../styles/Card.scss'
import '../../styles/FicheLogement.scss'
import flecheHaute from '../../assets/flecheHaute.png'



function EquipmentsCollapse(equipement) {
  //const [openId, setOpenId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //console.log(equipement.data);
  //console.log(equipement.id);

  const toggleCollapse = () => {
    //setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
    setIsOpen(!isOpen);
  }
 //const equipment = appartements.equipements
  return (
    <div  className='col  equipCollapse reglage'>
        <div 
          className={`col__fenetre col`}
          key={equipement.id}
        >
          <div id='equipCollapse' className=' col__ferme'>
            <p className='col__ferme--para'>Equipements</p>
            <button className={`bouton ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                
              <img
                className={`col__ferme--logo cursor ${isOpen ? 'rotate' : ''}`}
                src={flecheHaute}
                alt="Flèche déroulante"
              />
            </button>
          </div>
          
          {isOpen && (
            <div className='ferme__fenetre'>
                {equipement.data.map((Monequipements, index ) => (
              <p className='ferme__fenetre--para' key={index}>{Monequipements}</p>))}
            </div>
            
          )} 
        </div>
    </div>
  );
}

export default EquipmentsCollapse;

/* l36{openId === equipement.id && (*/
/* l28onClick={() => toggleCollapse(equipement.id)}*/