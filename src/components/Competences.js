import ProgressBar from 'react-bootstrap/ProgressBar';

const Competences = () => {
    return (
        <div className="col-lg-6  col-md-6 p-5">
            <img src="man-597178_1280.jpg" className="img-fluid"></img>
            <h3>Mes compétences</h3>
            <p className='pt-3'>HTML5 90%</p>
            <ProgressBar variant="danger" now={90}/>
            <p className='pt-3'>CSS3 80%</p>
            <ProgressBar variant="info" now={80}/>
            <p className='pt-3'>JAVASCRIPT 70%</p>
            <ProgressBar variant="warning" now={70}/>
            <p className='pt-3'>PHP 60%</p>
            <ProgressBar variant="success" now={60}/>
            <p className='pt-3'>REACT 50%</p>
            <ProgressBar now={50}/>
        </div>
    )
}

export default Competences