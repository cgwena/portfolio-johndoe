import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [activeLink, setActiveLink] = useState('/')

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    console.log(activeLink)

    return (
        <section>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-bg-dark px-5 text-uppercase fw-bold fs-3" href="/">John Doe</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>                       
                    <div className="collapse navbar-collapse flex" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
                                <Link className="nav-link text-bg-dark p-3 text-uppercase" aria-current="page" to="/" onClick={() => handleLinkClick('/')}>Accueil</Link>
                            </li>
                            <li className={`nav-item ${activeLink === '/services' ? 'active' : ''}`}>
                                <Link className="nav-link text-bg-dark p-3 text-uppercase" to="/services" onClick={() => handleLinkClick('/services')}>Services</Link>
                            </li>
                            <li className={`nav-item ${activeLink === '/portfolio' ? 'active' : ''}`}>
                                <Link className="nav-link text-bg-dark p-3 text-uppercase" to="/portfolio" onClick={() => handleLinkClick('/portfolio')}>Réalisations</Link>
                            </li>
                            <li className={`nav-item ${activeLink === '/blog' ? 'active' : ''}`}>
                                <Link className="nav-link text-bg-dark p-3 text-uppercase" to="/blog" onClick={() => handleLinkClick('/blog')}>Blog</Link>
                            </li>
                            <li className={`nav-item ${activeLink === '/contact' ? 'active' : ''}`}>
                                <Link className="nav-link text-bg-dark p-3 text-uppercase" to="/contact" onClick={() => handleLinkClick('/contact')}>Me contacter</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
    
}

export default Header