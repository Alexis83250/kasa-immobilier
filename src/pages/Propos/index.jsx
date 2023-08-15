import ImageFond2 from '../../assets/ImageFond2.png'
import Fleche from '../../assets/fleche-haute.png'
import '../../styles/Banner.scss'
import '../../styles/Propos.scss'


function Propos() {
  return (<div className='propos ajustement'>
    <div className='Banniere'>
      <img className="Banniere__ImageFond" src={ImageFond2} alt='Paysage en fond'/>
    </div>
    <div className='ajustement propos__closed'><p>Fiabilité</p><img className='propos__closed--logo' src={Fleche} alt='Fleche pour dérouler'/></div>
    <div className='ajustement propos__closed'><p>Respect</p><img className='propos__closed--logo' src={Fleche} alt='Fleche pour dérouler'/></div>
    <div className='ajustement propos__closed'><p>Service</p><img className='propos__closed--logo' src={Fleche} alt='Fleche pour dérouler'/></div>
    <div className='ajustement propos__closed'><p>Sécurité</p><img className='propos__closed--logo' src={Fleche} alt='Fleche pour dérouler'/></div>
    </div>
  )
}

export default Propos