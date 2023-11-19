const ServiceCard = (props) => {
    return (
            <div class="card col-lg-4 p-5">
                <i class={`${props.icon} fs-2 text-primary text-center p-3`}></i>
                <h3 class="card-title text-uppercase text-center">{props.title}</h3>
                <p class="card-text text-center">{props.text}</p>
            </div>
    )
}
export default ServiceCard