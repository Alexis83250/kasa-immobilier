import LogoFooter from '../../assets/LogoFooter.png'
import '../../styles/Footer.scss'



function Footer() {
  return (
    <footer className='footer'>
        <img src={LogoFooter} alt='Logo Kasa'/>
        <p className='footer__copy'> &copy; 2020 Kasa. All right reserved </p>
    </footer>
  )
}
export default Footer