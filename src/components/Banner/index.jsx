import React from 'react'
import ImageFond1 from '../../assets/ImageFond1.png'
import '../../styles/Banner.scss'


function Banner() {
	return (
		<div className='Banniere'>
			<img className="Banniere__ImageFond" src={ImageFond1} alt='Paysage en fond'/>

			<h1 className="Banniere__title">Chez Vous, partout et ailleurs</h1>
		</div>
	  );
}

export default Banner
