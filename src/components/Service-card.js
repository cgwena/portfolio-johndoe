const ServiceCard = (props) => {
    return (
            <li className="card col-lg-4 p-5" >
                <i className={`${props.icon} fs-2 text-primary text-center p-3`} key={props.id}></i>
                <h3 className="card-title text-uppercase text-center">{props.title}</h3>
                <p className="card-text text-center">{props.text}</p>
            </li>
    )
}
export default ServiceCard