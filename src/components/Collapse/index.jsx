import collapseList from '../datas/CollapseList'
import React, { useState } from 'react';
import '../../styles/Card.scss'
import '../../styles/Propos.scss'



function Collapse() {
  const [openId, setOpenId] = useState(null);

  const toggleCollapse = (itemId) => {
    setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
  }

  return (
    <div className='propos ajustement'>
      {collapseList.map(({ id, title, cover, description }) => (
        <div
          className={`propos__fenetre propos`}
          key={id}
        >
          <div className=' propos__closed'>
            <p className='propos__closed--para'>{title}</p>
            <button className={`bouton ${openId ? 'open' : ''}`} onClick={() => toggleCollapse(id)}>
              <img
                className={`propos__closed--logo cursor ${openId ? 'rotate' : ''}`}
                src={cover}
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

export default Collapse;





