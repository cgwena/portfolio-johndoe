import Banner from "../components/Banner"
import LegalAccordion from "../components/LegalAccordion"
import { Helmet } from "react-helmet";


const Legal = () => {
    return (
        <section>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">mentions légales</h2>
            <div className="bordure"></div>
            <LegalAccordion />
        </section>
    )
}

export default Legal