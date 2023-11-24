import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
    return (
        <div className="row shadow m-5">
            <div className="col-lg-6 col-md-6 p-5">
                <h3 className="m-3">À propos</h3>
                <div className="bordure2 m-3"></div>
                <p className="m-3">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le <strong>développement web</strong>.</p>
                <p className="m-3">Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                <p className="m-3">J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
            </div>
            <div className="col-lg-6  col-md-6 p-5">
                <img src="man-597178_1280.jpg" alt='John Doe, cheveux et barbe châtains, en train de travailler' className="img-fluid"></img>
                <h3>Mes compétences</h3>
                <p className='pt-3'>HTML5 90%</p>
                <ProgressBar variant="danger" now={90} />
                <p className='pt-3'>CSS3 80%</p>
                <ProgressBar variant="info" now={80} />
                <p className='pt-3'>JAVASCRIPT 70%</p>
                <ProgressBar variant="warning" now={70} />
                <p className='pt-3'>PHP 60%</p>
                <ProgressBar variant="success" now={60} />
                <p className='pt-3'>REACT 50%</p>
                <ProgressBar now={50} />
            </div>
        </div>
    )
}

export default About