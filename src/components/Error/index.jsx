import erreur from '../../assets/erreur.png'


function Error() {
    return (
        <div>
            <img src={erreur} alt="message d'erreur" />
            <h1>Oups ! La page que vous demandez n'existe pas</h1>
        </div>
    )
}
 
export default Error