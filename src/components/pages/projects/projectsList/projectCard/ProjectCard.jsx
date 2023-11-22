import './ProjectCard.css'
export const ProjectCard = ({ info , isDarkMode, setIsDarkMode}) => {
    return (
        <>
            <div className={isDarkMode ? "card mb-3 darkModeCard" : "card mb-3"} style={{ maxWidth: "600px", minHeight: "220px", padding: "20px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={info.pictureUrl} className="img-fluid rounded-start imgCard" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body cardProjectInfo">
                            <h5 className="card-title">{info.name}</h5>
                            <div className='cardBodyContainer'>
                                <div className='toolsContainer'>
                                    {info.herramientas.map((herramienta, index) => {
                                        return (
                                            <span className={isDarkMode ? 'tool darkModeTool' : ''} key={index}> {herramienta} </span>
                                        )
                                    })}
                                </div>
                                <div className="links--container">
                                    <a href={info.repositorio} target='_blank' className={ isDarkMode ? 'link--project darkModeLink' : 'link--project'}>Link repositorio</a>
                                    <a href={info.link} target='_blank' className={ isDarkMode ? 'link--project darkModeLink' : 'link--project'}>Link web</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}