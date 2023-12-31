import { useState, useEffect } from "react"

const Footer = () => {
    const [user, setUser] = useState([])

    const getUser = async () => {
        const res = await fetch('https://api.github.com/users/github-john-doe')
        const json = await res.json()
        setUser(json)
    }

    useEffect(() => {
        getUser()
    },[])
  
    return (
        <section className="footer">
            <div className="row">
                <div className="col-lg-3 col-md-6 p-4">
                    <h5 className="px-3">John Doe</h5>
                    <address className="px-3">
                        <p>40 rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                    </address>
                    <a className="text-black px-3" href="tel:0610203040">Téléphone : 06 20 30 40 50</a>
                    <div className="fs-2">
                        <a href={user.html_url} target="blank" rel="nofollow"><i className="fa-brands fa-github social-media text-dark"></i></a>
                        <a href="https://twitter.com/home" target="blank" rel="nofollow"><i className="fa-brands fa-square-twitter social-media text-dark"></i></a>
                        <a href="https://www.linkedin.com/feed/" target="blank" rel="nofollow"><i className="fa-brands fa-linkedin social-media text-dark"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 p-4">
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
                <div className="col-lg-3 col-md-6 p-4">
                    <h5>Mes dernières réalisations</h5>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/portfolio" className="nav-link">Fresh Food</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/portfolio" className="nav-link">Restaurant Akira</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/portfolio" className="nav-link">Espace bien-être</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 p-4">
                    <h5>Mes derniers articles</h5>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/blog" className="nav-link">Coder son site en HTML/CSS</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/blog" className="nav-link">Vendre ses produits sur le web</a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-chevron-right text-primary p-1"></i>
                        <a href="/blog" className="nav-link">Se positionner sur Google</a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center bg-dark p-2 ">
                <i className="fa-regular fa-copyright text-bg-dark p-1"></i>
                <small className="text-bg-dark">Designed by John Doe</small>
            </div>
            <nav className="gotoTop">   
                <a href="#"><div className="gottoTop__button d-flex justify-content-center"><i className="fa-solid fa-chevron-up"></i></div></a>

            </nav>
        </section>
    )
}

export default Footer