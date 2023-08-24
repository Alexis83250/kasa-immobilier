import appartements from '../datas/appartementList'
import React, { useState } from 'react';
//import '../../styles/Card.scss'
import '../../styles/Propos.scss'
import flecheHaute from '../../assets/flecheHaute.png'



function AppartCollapse() {
  const [openId, setOpenId] = useState(null);

  const toggleCollapse = (itemId) => {
    setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
  }

  return (
    <div className='propos ajustement'>
      {appartements.map(({ id, description }) => (
        <div 
          className={`propos__fenetre propos`}
          key={id}
        >
          <div  id='descCollapse' className=' propos__closed'>
            <p  className='propos__closed--para'>Description</p>
            <button className={`bouton ${openId ? 'open' : ''}`} onClick={() => toggleCollapse(id)}>
              <img
                className='propos__closed--logo cursor'
                src={flecheHaute}
                alt="Flèche déroulante"
              />
            </button>
          </div>
          {openId === id && (
            <div className='closed__fenetre'>
              <p className='closed__fenetre--para'>{description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AppartCollapse;