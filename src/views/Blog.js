import Banner from "../components/Banner"
import PageTop from "../components/PageTop.js"
import Card from "../components/Card.js"
import { blogArticles } from '../datas/blogArticles.js'

const Blog = () => {
    const blogArticle = blogArticles.map(article => {
        return <Card img={article.img} title={article.title} text={article.text} detail={article.date} alt={article.alt} btn={article.btn} key={article.id} />
    })
    return (
        <section>
            <Banner />
            <PageTop 
                title="blog"
                subtitle="Retrouvez ici quelques articles sur le développement web."
            />
            <div className="container">
                <div className='row blog-article'>
                    {blogArticle}
                </div>
            </div>
        </section>
    )
}

export default Blog