import React, { useState } from 'react';
//import '../../styles/Card.scss'
import '../../styles/FicheLogement.scss'
import flecheHaute from '../../assets/flecheHaute.png'



function AppartCollapse(descript) {
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
          key={descript.id}
        >
          <div id='equipCollapse' className=' col__ferme'>
            <p className='col__ferme--para'>Description</p>
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
              <p className='ferme__fenetre--para'>{descript.data}</p>
            </div>
            
          )}
        </div>
    </div>
  );
}

export default AppartCollapse;

/* l36{openId === equipement.id && (*/
/* l28onClick={() => toggleCollapse(equipement.id)}*/