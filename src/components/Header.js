const Header = () => {
    return (
        <section>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid ">
                    <a className="navbar-brand text-bg-dark p-3 text-uppercase" href="#/">John Doe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active text-bg-dark p-3 text-uppercase" aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-bg-dark p-3 text-uppercase" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-bg-dark p-3 text-uppercase" href="/portfolio">Réalisations</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-bg-dark p-3 text-uppercase" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-bg-dark p-3 text-uppercase" href="/contact">Me contacter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}

export default Header