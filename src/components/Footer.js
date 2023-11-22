const Footer = () => {
    return (
        <section className="footer">
            <div className="row mt-3 pt-3">
                <div className="col-lg-3 px-5">
                    <h5>John Doe</h5>
                    <p>40 rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <div className="fs-2">
                        <a href="https://api.github.com/users/github-john-doe" target="blank"><i className="fa-brands fa-github text-dark"></i></a>
                        <a href="https://twitter.com/home" target="blank"><i className="fa-brands fa-square-twitter text-dark"></i></a>
                        <a href="https://www.linkedin.com/feed/" target="blank"><i className="fa-brands fa-linkedin text-dark"></i></a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5>Liens utiles</h5>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a className="nav-link" aria-current="page" href="/">Accueil</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a className="nav-link" aria-current="page" href="/about">À propos</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a className="nav-link" aria-current="page" href="/services">Services</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a className="nav-link" aria-current="page" href="/contact">Me contacter</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a className="nav-link" aria-current="page" href="/legal">Mentions légales</a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5>Mes dernières réalisations</h5>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Fresh Food</p>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Restaurant Akira</p>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Espace bien-être</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5>Mes derniers articles</h5>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Coder son site en HTML/CSS</p>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Vendre ses produits sur le web</p>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <p>Se positionner sur Google</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center bg-dark p-2 ">
                <i className="fa-regular fa-copyright text-bg-dark p-1"></i>
                <small className="text-bg-dark">Designed by John Doe</small>
            </div>
        </section>
    )
}

export default Footer