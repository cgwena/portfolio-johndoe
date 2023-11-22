import Banner from "../components/Banner"
import ProjectCard from "../components/Project-card"
import {projects} from '../datas/projects'

const Realisations = () => {

    const projet = projects.map(projet => {
        return <ProjectCard img={projet.img} title={projet.title} text={projet.text} tech={projet.tech} alt={projet.alt} key={projet.id}/>
    })

    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">portfolio</h2>
            <h4 className="text-center pb-4">Voici quelques-unes de mes réalisations</h4>
            <div className="bordure"></div>
            <div className='row m-4'>
                {projet}
            </div>
        </section>
    )
}

export default Realisations