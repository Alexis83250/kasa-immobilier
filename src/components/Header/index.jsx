import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/LogoHeader.png'



function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={LogoHeader} alt='Logo Kasa'/>
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/A-Propos">A Propos</Link>
      </div>
    </nav>
  )
}
export default Header