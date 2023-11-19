import Banner from "../components/Banner"
import LegalAccordion from "../components/LegalAccordion"

const Legal = () => {
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">mentions légales</h2>
            <div className="bordure"></div>
            <LegalAccordion />
        </section>
    )
}

export default Legal