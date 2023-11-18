import Banner from "../components/Banner"
import ProjectCard from "../components/Project-card"

const Realisations = () => {
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">portfolio</h2>
            <p className="text-center">Voici quelques-unes de mes réalisations</p>
            <div className="bordure"></div>
            <ProjectCard />
        </section>
    )
}

export default Realisations