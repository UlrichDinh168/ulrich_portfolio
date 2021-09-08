import React from 'react'
import { food, tracker, chatapp, resort, weather } from '../assets'

const Portfolio = ({ data }) => {
    const { projects } = data
    const projectElement = projects?.map((projects) => {
        const projectImage = {
            food: food, tracker: tracker, chatapp: chatapp, resort: resort, weather: weather
        }
        return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                    <img alt={projects.title} src={projectImage[projects.image]} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{projects.title}</h5>
                            <p>{projects.category}</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
            </div>
        </div>
    })
    return (
        <section id="portfolio">

            <div className="row">

                <div className="twelve columns collapsed">

                    <h1>Check Out Some of My Works.</h1>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {data ? projectElement : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
