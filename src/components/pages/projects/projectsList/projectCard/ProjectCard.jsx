import { useState } from 'react'
import './ProjectCard.css'
export const ProjectCard = ({ info, isDarkMode, setIsDarkMode }) => {
    const [loading, setLoading] = useState(true)

    const handleImageLoad=()=>{
        setLoading(false)
    }
    return (
        <>
            <div className={isDarkMode ? "card mb-3 darkModeCard" : "card mb-3"} style={{ maxWidth: "600px", minHeight: "400px", padding: "10px",display:'flex',justifyContent:'center' }}>
            {loading && <div className="loader">Loading...</div>}
                <div className="row g-0"  style={{ display: loading ? 'none' : 'flex' }}>
                    <div className="col-md-4">
                        <img 
                            src={info.pictureUrl} 
                            className="img-fluid rounded-start imgCard" 
                            alt="..." 
                            onLoad={handleImageLoad}
                            />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body cardProjectInfo">
                            <h5 className="card-title">{info.name}</h5>
                            <div className='card-responsive_fullstack'>
                                <h6>fullstack: {info.fullstack}</h6>
                                <img className='card_fullstack' src={info.responsive} alt="" />
                            </div>
                            <div className='cardBodyContainer'>
                                <div className='toolsContainer'>
                                    {info.herramientas.map((herramienta, index) => {
                                        return (
                                            
                                            <span className={isDarkMode ? 'tool darkModeTool' : ''} key={index}> {herramienta} </span>
                                        )
                                    })}
                                </div>
                                {
                                    info.api ?
                                        <div className='toolsContainer'>
                                            <span className={isDarkMode ? 'tool darkModeTool' : ''}>API:</span>
                                            {
                                                info.api.map((api, index) => {
                                                    return (
                                                        <span className={isDarkMode ? 'tool darkModeTool' : ''} key={index}> {api} </span>
                                                    )
                                                })
                                            }
                                        </div>
                                        : null
                                }
                                <div className="links--container">
                                    <a href={info.repositorio} target='_blank' className={isDarkMode ? 'link--project darkModeLink' : 'link--project'}>Link repositorio</a>
                                    <a href={info.link} target='_blank' className={isDarkMode ? 'link--project darkModeLink' : 'link--project'}>Link web</a>
                                    {
                                        info.api_git ?
                                        <a href={info.api_git} target='_blank' className={isDarkMode ? 'link--project darkModeLink' : 'link--project'}>Repositorio api</a> : 
                                        ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}