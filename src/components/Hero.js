// import hero__img from '../images/software-developer-6521720_1280.jpg'

const Hero = () => {
    return (
        <section className="hero">


            <div className="hero__img">
                <div className="hero__overlay"></div>
                {/* <img className="hero__img" src={hero__img}></img> */}
                <div className="hero__text">
                    <h1 className="text-white">Bonjour, je suis John Doe</h1>
                    <h2 className="text-white">Développeur web full stack</h2>
                    <div class='text-center'>
                        <a href="#" class="btn btn-primary m-4">En savoir plus</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero