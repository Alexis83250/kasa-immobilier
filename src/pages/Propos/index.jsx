import ImageFond2 from '../../assets/ImageFond2.png'
/*import Fleche from '../../assets/fleche-haute.png'
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

import React from 'react';
import Collapse from '../../components/Collapse'
import collapseList from '../../components/datas/CollapseList'
//import Banner from '../../components/Banner'
import '../../styles/Propos.scss'
import maBanniere from '../../components/datas/banniere'
import Banner from '../../components/Banner'



function Propos() {

  const selectedBanner = maBanniere.find(ban => ban.page === "a_propos");
  return (
    <div className='ajustement'>
      <div className='Banniere'>
      <Banner
          key={selectedBanner.id}
          id={selectedBanner.id}
          cover={selectedBanner.cover}
          page="a_propos"
        />
      </div>

      {collapseList.map(item => (
        <Collapse
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          cover={item.cover}
        />
      ))}
    </div>
  );
}

export default Propos;