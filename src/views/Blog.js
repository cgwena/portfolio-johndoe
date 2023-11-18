import Banner from "../components/Banner"
import BlogCard from "../components/Blog-card"

const Blog = () => {
    return (
        <section>
            <Banner />
            <h2 className="text-uppercase text-center pt-5">blog</h2>
            <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
            <div className="bordure"></div>
            <BlogCard />
        </section>
    )
}

export default Blog