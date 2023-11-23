import Banner from "../components/Banner"
import LegalAccordion from "../components/LegalAccordion"
import MetaTags from 'react-meta-tags';

const Legal = () => {
    return (
        <section>
            <MetaTags>
                <meta name="robots" content="noindex" />
            </MetaTags>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">mentions légales</h2>
            <div className="bordure"></div>
            <LegalAccordion />
        </section>
    )
}

export default Legal