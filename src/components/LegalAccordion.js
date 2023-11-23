import {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'

const LegalAccordion = () => {

  const [activeKey, setActiveKey] = useState("0");

  const handleAccordionChange = (key) => {
    setActiveKey(key);
  };

  return (
    <section className="m-5">
      <Accordion activeKey={activeKey} onSelect={handleAccordionChange}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={activeKey === "0" ? "active-header" : ""}>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <h3>John Doe</h3>
            <div className='d-inline-flex'>
              <p><i className="fa-solid fa-location-dot p-1"></i>40 rue Laure Diebold</p>
            </div>
            <p>69009 Lyon, France</p>
            <div>
              <a href='tel:0620304050'><i className="fa-solid fa-mobile-screen-button text-dark"></i> 06 20 30 40 50</a>
            </div>
            <a href='mailto:john.doe@gmail.com'><i className="fa-solid fa-envelope text-dark "></i> john.doe@gmail.com</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className={activeKey === "1" ? "active-header" : ""}>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h3>Always Data</h3>
            <address>91 rue du Faubourg Saint-Honoré</address>
            <address>75008 Paris</address>
            <i className="fa-solid fa-globe"></i>
            <a className='text-primary' href="http://www.alwaysdata.com" target='blank'>www.alwaysdata.com</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className={activeKey === "2" ? "active-header" : ""}>Crédits</Accordion.Header>
          <Accordion.Body>
            <h3>Crédits</h3>
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>Les images libres de droits sont issues du site<a className='text-primary' href='https://pixabay.com/fr/' target='blank'>Pixabay.</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );

}

export default LegalAccordion