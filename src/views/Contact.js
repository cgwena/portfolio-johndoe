import Banner from "../components/Banner"
import Form from "../components/Form"

const Contact = () => {
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">Me contacter</h2>
            <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className="bordure"></div>
            <Form />
        </section>
    )
}

export default Contact