//import collapseList from '../datas/CollapseList'
import React, { useState } from 'react';
import '../../styles/Propos.scss'



function Collapse(col) {
  const [openId, setOpenId] = useState(null);

  const toggleCollapse = (itemId) => {
    setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
  }

  return (
    <div className='propos ajustement' key={col.id}>
        <div
          className={`propos__fenetre propos`}
          
        >
          <div className=' propos__closed'>
            <p className='propos__closed--para'>{col.title}</p>
            <button className={`bouton ${openId ? 'open' : ''}`} onClick={() => toggleCollapse(col.id)}>
              <img
                className={`propos__closed--logo cursor ${openId ? 'rotate' : ''}`}
                src={col.cover}
                alt="Flèche déroulante"
              />
            </button>
          </div>
          {openId === col.id && (
            <div className='closed__fenetre'>
              <p className='closed__fenetre--para'>{col.description}</p>
            </div>
          )}
        </div>
      
    </div>
  );
}

export default Collapse;





