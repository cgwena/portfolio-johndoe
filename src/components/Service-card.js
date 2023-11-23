const ServiceCard = (props) => {
    return (
            <li className="card service-card col-lg-4 col-md-4 p-5" >
                <i className={`${props.icon} text-center p-3 icon`} key={props.id}></i>
                <h3 className="card-title text-uppercase text-center py-2">{props.title}</h3>
                <h5 className="card-text text-center pb-5">{props.text}</h5>
            </li>
    )
}
export default ServiceCard