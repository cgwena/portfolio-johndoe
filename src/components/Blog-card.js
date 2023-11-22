const BlogCard = (props) => {
    return (
        <li className="card col-lg-4 col-md-6 mb-3" key={props.id}>
            <img src={props.img} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Lire la suite</a>
            </div>
            <div className="card-footer text-muted">
                <p>Publié le {props.date}</p>
            </div>
        </li>
    )
}

export default BlogCard