const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__img">
                <div className="hero__overlay"></div>
                <div className="hero__text">
                    <h1 className="text-white">Bonjour, je suis John Doe</h1>
                    <h2 className="text-white">Développeur web full stack</h2>
                    <div className='text-center'>
                        <a href="/about" className="btn btn-primary m-4">En savoir plus</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero