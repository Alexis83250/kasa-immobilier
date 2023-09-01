import { Link, NavLink } from 'react-router-dom'
import LogoHeader from '../../assets/LogoHeader.png'
import '../../styles/Header.scss'




function Header() {
  return (
    <header className='nav'>
      <Link  className='nav__logo' to="/">
        <img className='nav__logo--logo' src={LogoHeader} alt='Logo Kasa'/>
      </Link>
      <nav className='nav__div'>
        <NavLink className='nav__lien' to="/">Accueil</NavLink>
        <NavLink className='nav__lien' to="/A-Propos">A Propos</NavLink>
      </nav>
    </header>
  )
}
export default Header