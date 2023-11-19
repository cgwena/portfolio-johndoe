const ProjectCard = (props) => {
    return (
        <div class="card col-lg-4 col-md-6 mb-3">
            <img src={props.img} class="card-img-top" alt="des sushi" />
            <div class="card-body">
                <h3 class="card-title text-center">{props.title}</h3>
                <p class="card-text text-center">{props.text}</p>
                <div class='text-center'>
                    <a href="#" class="btn btn-outline-primary">Voir</a>
                </div>
            </div>
            <div class="card-footer text-muted text-center">
                Site réalisé {props.tech}
            </div>
        </div>
    )
}

export default ProjectCard