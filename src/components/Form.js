const Form = () => {
    return (
        <form>
            <div class="m-3">
                <input type="text" class="form-control mb-3" id="name" aria-describedby="name" placeholder="Votre nom"></input>
                <input type="email" class="form-control mb-3" id="email" aria-describedby="email" placeholder="Votre adresse mail"></input>
                <input type="text" class="form-control mb-3" id="phone" aria-describedby="phone" placeholder="Votre numéro de téléphone"></input>
                <input type="text" class="form-control mb-3" id="sujet" aria-describedby="sujet" placeholder="Sujet"></input>
                <textarea class="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
        </form>
    )
}

export default Form