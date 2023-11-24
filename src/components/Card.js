const Card = (props) => {
    return (
        <li className="col-lg-4 col-md-6" key={props.id}>
            <div className="card m-3">
                <img src={props.img} className="card-img-top" alt="des sushi" />
                <div className="card-body">
                    <h3 className="card-title text-center">{props.title}</h3>
                    <h5 className="card-text text-center">{props.text}</h5>
                    <div className='text-center'>
                        <a href="#" className="btn btn-outline-primary">{props.btn}</a>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    {props.detail}
                </div>
            </div>
        </li>
    )
}

export default Card