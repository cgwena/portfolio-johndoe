const Header = () => {
    return (
        <section>
             <nav>
                    <a href="#">JOHN DOE</a>
                    <div>
                        <ul>
                            <li>
                                <a className="active" aria-current="page" href="#">ACCUEIL</a>
                            </li>
                            <li>
                                <a href="#">SERVICES</a>
                            </li>
                            <li>
                                <a  href="#">RÉALISATIONS</a>
                            </li>
                            <li>
                                <a href="#">BLOG</a>
                            </li>
                            <li>
                                <a href="#">ME CONTACTER</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </section>
    )
}

export default Header