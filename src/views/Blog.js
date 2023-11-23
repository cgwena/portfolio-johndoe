import Banner from "../components/Banner"
import BlogCard from "../components/Blog-card"
import { blogArticles } from '../datas/blogArticles.js'

const Blog = () => {
    const blogArticle = blogArticles.map(article => {
        return <BlogCard img={article.img} title={article.title} text={article.text} date={article.date} alt={article.alt} key={article.id} />
    })
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">blog</h2>
            <h4 className="text-center pb-4">Retrouvez ici quelques articles sur le développement web.</h4>
            <div className="bordure"></div>
            <div className="container">
                <div className='row'>
                    {blogArticle}
                </div>
            </div>
        </section>
    )
}

export default Blog