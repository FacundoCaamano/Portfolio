import './Projects.css'
import {ProjectsInfo} from '../../../projectsInfo/ProjectsInfo.jsx'
import { ProjectsList } from './projectsList/ProjectList'
export const Projects = () => {

    const projectsData = ProjectsInfo
    
    return (
        <ProjectsList projectsData={projectsData}/>
    )
}