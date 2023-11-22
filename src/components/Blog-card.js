const BlogCard = (props) => {
    return (
        <li className="card col-lg-4 col-md-6 p-3" key={props.id}>
            <img src={props.img} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h5 className="card-text">{props.text}</h5>
                <button href="#" className="btn btn-primary">Lire la suite</button>
            </div>
            <div className="card-footer text-muted">
                <p>Publié le {props.date}</p>
            </div>
        </li>
    )
}

export default BlogCard