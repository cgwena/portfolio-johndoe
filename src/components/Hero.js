// import hero__img from '../images/software-developer-6521720_1280.jpg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__img">
                {/* <img className="hero__img" src={hero__img}></img> */}
                <div className="hero__text">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h3>Développeur web full stack</h3>
                </div>
            </div>
        </section>
    )
}

export default Hero