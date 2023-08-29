import { Link } from 'react-router-dom'
import erreur from '../../assets/erreur.png'
import '../../styles/Error.scss'
import '../../styles/Body.scss'



function Error() {
    return (
        <div className='error'>
            <img className="padding" src={erreur} alt="message d'erreur" />
            <h1 className="error__color padding">Oups ! La page que vous demandez n'existe pas</h1>
            <Link className='border' to="/">
                <p className="error__color padding ">Retourner sur la page d'acceuil</p> 
        </Link>
        </div>
    )
}
 
export default Error