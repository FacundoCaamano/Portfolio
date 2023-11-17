import './About.css'
import {NavLink} from 'react-router-dom'
import cv from '../../../../assets/imgs/fc.png'
export const About = () => {
    return (
        <div className="aboutContainer" id='about'>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/777/777910.png" className="img-fluid rounded-start iconCV" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href={cv} download='cv' className="card-title">Descargar CV</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/372/372399.png" className="img-fluid rounded-start iconLinkedin" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href='https://www.linkedin.com/in/facundo-caama%C3%B1o-6a581324b/' target="_blank" className="card-title">Link a mi perfil de Linkedin</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/6188/6188245.png" className="img-fluid rounded-start iconProject" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <NavLink to='/projects' className="card-title">Mis projectos</NavLink>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/527/527589.png" className="img-fluid rounded-start iconGit" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href='https://github.com/FacundoCaamano?tab=repositories' target='_blank' className="card-title">Link a mi repositorio en Github</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}