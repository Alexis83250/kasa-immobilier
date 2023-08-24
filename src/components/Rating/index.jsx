import appartements from '../datas/appartementList'
import React from 'react';
import '../../styles/Card.scss'
import '../../styles/Propos.scss'
import etoilePleine from "../../assets/etoilePleine.png"
import etoileVide from "../../assets/etoileVide.png"
import { useParams } from 'react-router-dom';



function ratingStar() {
    const { rating } = useParams();

    const selectedrating = appartements.find(rating);
  const range = [1, 2, 3, 4, 5] 

  const ratingAppart = appartements.rating

  const ratingFinale = rate === 'rating' ? etoilePleine : etoileVide


  return (
    <div className='rating'>
       {appartements.map((rating) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
    </div>
  );
}

export default ratingStar;





