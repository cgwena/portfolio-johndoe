const Form = () => {
    return (
        <div className="col-lg-6">

            <h3 className="m-3">Formulaire de contact</h3>
            <div className="bordure2 m-3"></div>
            <form>
                <div className="p-3">
                    <input type="text" className="form-control mb-3" id="name" aria-describedby="name" placeholder="Votre nom" required></input>
                    <input type="email" className="form-control mb-3" id="email" aria-describedby="email" placeholder="Votre adresse mail" required></input>
                    <input type="text" className="form-control mb-3" id="phone" aria-describedby="phone" placeholder="Votre numéro de téléphone" required></input>
                    <input type="text" className="form-control mb-3" id="sujet" aria-describedby="sujet" placeholder="Sujet" required></input>
                    <textarea className="form-control" id="message" rows="12" placeholder="Votre message" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </div>
            </form>
        </div>
    )
}

export default Form