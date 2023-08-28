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
    <div  className='propos  equipCollapse ajustement'>
        <div 
          className={`propos__fenetre propos`}
          key={descript.id}
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
              <p className='closed__fenetre--para'>{descript.data}</p>
            </div>
            
          )}
        </div>
    </div>
  );
}

export default AppartCollapse;

/* l36{openId === equipement.id && (*/
/* l28onClick={() => toggleCollapse(equipement.id)}*/