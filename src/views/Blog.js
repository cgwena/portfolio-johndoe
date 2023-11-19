import Banner from "../components/Banner"
import BlogCard from "../components/Blog-card"
import { blogArticles } from '../datas/blogArticles.js'

const Blog = () => {
    const blogArticle = blogArticles.map(article => {
        return <BlogCard img={article.img} title={article.title} text={article.text} date={article.date} alt={article.alt} />
    })
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">blog</h2>
            <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
            <div className="bordure"></div>
            <div className='row m-4'>
                {blogArticle}
            </div>
        </section>
    )
}

export default Blog