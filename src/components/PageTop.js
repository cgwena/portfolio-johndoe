const PageTop = (props) => {
    return (
        <section>
           <h2 className="text-uppercase text-center pt-5">{props.title}</h2>
            <h4 className="text-center pb-4">{props.subtitle}</h4>
            <div className="bordure"></div>
        </section>
    )
}

export default PageTop