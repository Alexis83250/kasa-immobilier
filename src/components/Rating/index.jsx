//import appartements from '../datas/appartementList'
import React from 'react';
import '../../styles/Card.scss'
import '../../styles/Propos.scss'
import etoilePleine from "../../assets/etoilePleine.png"
import etoileVide from "../../assets/etoileVide.png"
//import { useParams } from 'react-router-dom';


function RatingStar({ data, index }) {
  const note = data;
  const ratingStars = [];
  const ratingEnd = 5;
  const pleineEtoile = <img className={"ratingStar pleine"} src={etoilePleine} alt="étoile pleine" />;
  const videEtoile = <img className={"ratingStar vide"} src={etoileVide} alt="étoile vide" />;

  for (let i = 0; i < ratingEnd; i++) {
    ratingStars.push(
      <span key={i}>
        {i < note ? pleineEtoile : videEtoile}
      </span>
    );
  }

  return <div className='uniqueRating' >{ratingStars}</div>;
}

export default RatingStar;





