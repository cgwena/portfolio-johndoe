import Banner from "../components/Banner"
import ServiceCard from "../components/Service-card"

const Services = () => {
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">mes offres de services</h2>
            <p className="text-center">Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="bordure"></div>
            <ServiceCard />
        </section>
    )
}

export default Services