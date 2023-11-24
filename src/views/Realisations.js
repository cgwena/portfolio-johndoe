import Banner from "../components/Banner"
import PageTop from "../components/PageTop"
import Card from "../components/Card"
import { projects } from '../datas/projects'

const Realisations = () => {

    const projet = projects.map(projet => {
        return <Card img={projet.img} title={projet.title} text={projet.text} detail={projet.tech} alt={projet.alt} btn={projet.btn} key={projet.id} />
    })

    return (
        <section>
            <Banner />
            <PageTop 
                title="portfolio"
                subtitle="Voici quelques-unes de mes réalisations"
            />
            <div className="container text-center">
                <div className='row projet-card'>
                    {projet}
                </div>
            </div>
        </section>
    )
}

export default Realisations