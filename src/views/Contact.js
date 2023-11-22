import Form from "../components/Form"
import Coordonnees from "../components/Coordonnees"

const Contact = () => {
    return (

        <section className="contact mt-5">
            <div className="contact__img">
                <div className="contact__overlay"></div>
                <div className="my-5">
                    <div className='m-5 p-5 bg-white rounded'>
                        <div className='d-flex flex-column'>
                            <h2 className="text-uppercase text-center pt-5">Me contacter</h2>
                            <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                            <div className="bordure"></div>
                        </div>
                        <div className='row'>
                            <Form />
                            <Coordonnees />
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Contact