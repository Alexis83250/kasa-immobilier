import erreur from '../../assets/erreur.png'
import '../../styles/Error.scss'
import '../../styles/Body.scss'



function Error() {
    return (
        <div className='error'>
            <img src={erreur} alt="message d'erreur" />
            <h1>Oups ! La page que vous demandez n'existe pas</h1>
        </div>
    )
}
 
export default Error