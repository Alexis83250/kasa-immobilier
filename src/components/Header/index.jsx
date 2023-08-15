import { Link } from 'react-router-dom'
import LogoHeader from '../../assets/LogoHeader.png'
import '../../styles/Header.scss'




function Header() {
  return (
    <header className='nav'>
      <Link to="/">
        <img className='nav__logo' src={LogoHeader} alt='Logo Kasa'/>
      </Link>
      <nav className='nav__div'>
        <Link className='nav__lien' to="/">Accueil</Link>
        <Link className='nav__lien' to="/A-Propos">A Propos</Link>
      </nav>
    </header>
  )
}
export default Header