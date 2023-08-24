import appartements from '../datas/appartementList'
import React, { useState } from 'react';
//import '../../styles/Card.scss'
import '../../styles/Propos.scss'
import flecheHaute from '../../assets/flecheHaute.png'



function EquipmentsCollapse(equipement) {
  //const [openId, setOpenId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //console.log(equipement.data);
  //console.log(equipement.id);

  const toggleCollapse = (itemId) => {
    //setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
    setIsOpen(!isOpen);
  }
 //const equipment = appartements.equipements
  return (
    <div  className='propos  equipCollapse ajustement'>
        <div 
          className={`propos__fenetre propos`}
          key={equipement.id}
        >
          <div id='equipCollapse' className=' propos__closed'>
            <p className='propos__closed--para'>Equipements</p>
            <button className={`bouton ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
                
              <img
                className={`propos__closed--logo cursor ${isOpen ? 'rotate' : ''}`}
                src={flecheHaute}
                alt="Flèche déroulante"
              />
            </button>
          </div>
          
          {isOpen && (
            <div className='closed__fenetre'>
                {equipement.data.map((Monequipements, index ) => (
              <p className='closed__fenetre--para' key={index}>{Monequipements}</p>))}
            </div>
            
          )}
        </div>
    </div>
  );
}

export default EquipmentsCollapse;

/* l36{openId === equipement.id && (*/
/* l28onClick={() => toggleCollapse(equipement.id)}*/