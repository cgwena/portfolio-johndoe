import Banner from "../components/Banner"
import ServiceCard from "../components/Service-card"
import {services} from '../datas/services'

const Services = () => {

    const service = services.map(service => {
        return <ServiceCard title={service.title} text={service.text} icon={service.icon} />
    })

    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">mes offres de services</h2>
            <p className="text-center">Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="bordure"></div>
            <div className='row m-4'>
                {service}
            </div>
        </section>
    )
}

export default Services