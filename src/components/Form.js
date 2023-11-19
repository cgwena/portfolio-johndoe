const Form = () => {
    return (
        <div class="col-lg-6">
    
        <h3 class="m-3">Formulaire de contact</h3>
        <div className="bordure2 m-3"></div>
        <form>
            <div class="m-3">
                <input type="text" class="form-control mb-3" id="name" aria-describedby="name" placeholder="Votre nom"></input>
                <input type="email" class="form-control mb-3" id="email" aria-describedby="email" placeholder="Votre adresse mail"></input>
                <input type="text" class="form-control mb-3" id="phone" aria-describedby="phone" placeholder="Votre numéro de téléphone"></input>
                <input type="text" class="form-control mb-3" id="sujet" aria-describedby="sujet" placeholder="Sujet"></input>
                <textarea class="form-control" id="message" rows="12" placeholder="Votre message"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
        </form>
        </div>
    )
}

export default Form