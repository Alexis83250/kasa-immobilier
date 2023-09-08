//import collapseList from '../datas/CollapseList'
import React, { useState } from 'react';
//import '../../styles/Propos.scss'
import flecheHaute from "../../assets/flecheHaute.png"
import '../../styles/FicheLogement.scss'



function Collapse(descript) {
  //const [openId, setOpenId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //console.log(equipement.data);
  //console.log(equipement.id);

  const toggleCollapse = () => {
    //setOpenId(prevOpenId => (prevOpenId === itemId ? null : itemId));
    setIsOpen(!isOpen);
  }
/*
  const titleDetail = descript.number === "1"  & descript.page === "a_propos" ? descript.title : descript.number === "2" & descript.page === "logement" ? `Description` : `Equipements` ;
  const descriptDetail = descript.number === "1"  & descript.page === "a_propos" ? descript.data : descript.number === "2" & descript.data === "logement" ? descript.data : descript.data.map((Monequipements, index ) => (
    <p className='ferme__fenetre--para' key={index}>{Monequipements}</p>)) ;*/
    const titleDetail = (descript.number === "1" && descript.page === "a_propos") ? descript.title : ((descript.number === "2" && descript.page === "logement") ? `Description` : `Equipements`);

    const descriptDetail = (descript.number === "1" && descript.page === "a_propos") ? descript.data : ((descript.number === "2" && descript.page === "logement") ? descript.data : descript.data.map((Monequipements, index ) => (
      <span className='ferme__fenetre--para' key={index}>{Monequipements}</span>
    )));

    


  return (
    <div  className='col  equipCollapse reglage'>
        <div 
          className={`col__fenetre col`}
          key={descript.id}
        >
          <div id='equipCollapse' className=' col__ferme'>
            <p className='col__ferme--para'>{titleDetail}</p>
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
              <p className='ferme__fenetre--para'>{descriptDetail}</p>
            </div>
            
          )}
        </div>
    </div>
  );
}

export default Collapse;





