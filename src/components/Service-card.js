const ServiceCard = (props) => {
    return (
        <li className=" col-lg-4 col-md-4 text-center mb-3" >
            <div className="card service-card">
                <i className={`${props.icon} icon p-5`} key={props.id}></i>
                <h3 className="card-title text-uppercase p-3">{props.title}</h3>
                <h5 className="card-text p-3">{props.text}</h5>
            </div>
        </li>
    )
}
export default ServiceCard