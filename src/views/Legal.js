import Banner from "../components/Banner"
import LegalAccordion from "../components/LegalAccordion"
import PageTop from '../components/PageTop'
import { Helmet } from "react-helmet";


const Legal = () => {
    return (
        <section>
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Banner />
            <PageTop
                title="mentions légales"
            />
            <LegalAccordion />
        </section>
    )
}

export default Legal