/*import ImageFond2 from '../../assets/ImageFond2.png'
import Fleche from '../../assets/fleche-haute.png'
import { useState, useEffect } from "react";
import '../../styles/Banner.scss'
import '../../styles/Propos.scss'


function Propos() {
  const [isClosed, setIsClosed] = useState(true);
  return (<div className='propos ajustement'>

    
    <div className='Banniere'>
      <img className="Banniere__ImageFond" src={ImageFond2} alt='Paysage en fond'/>
    </div>




    <div className='propos__fenetre propos'> 
      <div className='ajustement propos__closed'><p>Fiabilité</p><img className='propos__closed--logo cursor' src={Fleche} alt='Fleche pour dérouler'/></div>
      <p className='closed__fenetre'>Les annonces postées sur Kasa garantissent une fiabilité totale. 
      Les phtos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </div>

      <div className='propos__fenetre propos'> 
      <div className='ajustement propos__closed'><p>Respect</p><img className='propos__closed--logo cursor' src={Fleche} alt='Fleche pour dérouler'/></div>
      <p className='closed__fenetre'>La bienveillance fait partie des valeurs fondatrices de Kasa. 
      Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>

      <div className='propos__fenetre propos'> 
      <div className='ajustement propos__closed'><p>Service</p><img className='propos__closed--logo cursor' src={Fleche} alt='Fleche pour dérouler'/></div>
      <p className='closed__fenetre'>La bienveillance fait partie des valeurs fondatrices de Kasa. 
      Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>

      <div className='propos__fenetre propos'> 
      <div className='ajustement propos__closed'><p>Sécurité</p><img className='propos__closed--logo cursor' src={Fleche} alt='Fleche pour dérouler'/></div>
      <p id="Marge" className='closed__fenetre'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
       Nous organisons également des ateliers sur la sécurité domestique que nos hôtes.</p>
      </div>
   
    </div>
  )
}

export default Propos*/

import React, { useState } from 'react';
import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import '../../styles/Propos.scss'

function Propos() {
 

  return (
    <div className='ajustement'>

      <Banner />
      <Collapse />

    </div>
  );
}

export default Propos;