const Coordonnees = () => {
    return (
        <div className="col-lg-6">

            <h3 className="m-3">Mes coordonnées</h3>
            <div className="bordure2 m-3"></div>
            <i className="fa-solid fa-location-dot px-3"></i>
            <p className="px-3">40 rue Laure Diebold, 69009 Lyon</p>
            <div className="px-3">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <a className='text-dark' href='tel:0620304050'>06 20 30 40 50</a>
            </div>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540674!2d4.796403976227665!3d45.77866571240225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1700416078376!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Coordonnees