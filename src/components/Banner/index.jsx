import React from 'react'
import ImageFond1 from '../../assets/ImageFond1.png'
import ImageFond2 from '../../assets/ImageFond2.png'
import '../../styles/Banner.scss'

function Banner(props) {
  const { page, description, cover } = props;

  const backgroundImage = page === 'logement' ? ImageFond1 : ImageFond2;
  const descriptionImage = page === 'logement' ? description : "";

  return (
    <div className='Banniere'>
      <img className="Banniere__ImageFond" src={backgroundImage} alt='Paysage en fond'/>
      <h1 className="Banniere__title">{descriptionImage}</h1>
    </div>
  );
}

export default Banner;
