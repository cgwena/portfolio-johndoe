import Banner from "../components/Banner"
import PageTop from "../components/PageTop"
import ServiceCard from "../components/Service-card"
import { services } from '../datas/services'

const Services = () => {

    const service = services.map(service => {
        return <ServiceCard title={service.title} text={service.text} icon={service.icon} key={service.id} />
    })

    return (
        <section>
            <Banner />
            <PageTop 
                title="mes offres de services"
                subtitle="Voici les prestations sur lesquelles je peux intervenir."
            />
            <div className="container text-center">
                <div className='row'>
                    {service}
                </div>
            </div>
        </section>
    )
}

export default Services