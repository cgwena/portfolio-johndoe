import code from '../images/code-1076533_1280.jpg'

const BlogCard = () => {
    return (
        <div className='row'>
            <div class="card col-lg-4 col-md-6">
                <img src={code} class="card-img-top" alt="du code html" />
                <div class="card-body">
                    <h3 class="card-title">Coder son site en HTML/CSS</h3>
                    <p class="card-text">Lorem ipsum</p>

                    <a href="#" class="btn btn-primary">Lire la suite</a>

                </div>
                <div class="card-footer text-muted">
                    Publié le 22 août 2023
                </div>
            </div>
        </div>
    )
}

export default BlogCard