import sushi from '../images/sushi-354628_1280.jpg'

const ProjectCard = () => {
    return (
        <div className='row'>
            <div class="card col-lg-4 col-md-6">
                <img src={sushi} class="card-img-top" alt="des sushi" />
                <div class="card-body">
                    <h3 class="card-title text-center">Restaurant Akira</h3>
                    <p class="card-text text-center">Réalisation d'un site vitrine.</p>
                    <div class='text-center'>
                        <a href="#" class="btn btn-outline-primary">Voir</a>
                    </div>
                </div>
                <div class="card-footer text-muted text-center">
                    Site réalisé avec Wordpress
                </div>
            </div>
        </div>
    )
}

export default ProjectCard