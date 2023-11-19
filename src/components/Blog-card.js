const BlogCard = (props) => {
    return (
        <div class="card col-lg-4 col-md-6 mb-3">
            <img src={props.img} class="card-img-top" alt={props.alt} />
            <div class="card-body">
                <h3 class="card-title">{props.title}</h3>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary">Lire la suite</a>
            </div>
            <div class="card-footer text-muted">
                <p>Publié le {props.date}</p>
            </div>
        </div>
    )
}

export default BlogCard