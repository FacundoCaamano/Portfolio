import './Projects.css'
import {ProjectsInfo} from '../../../projectsInfo/ProjectsInfo.jsx'
import { ProjectsList } from './projectsList/ProjectList'
export const Projects = ({isDarkMode, setIsDarkMode}) => {

    const projectsData = ProjectsInfo
    
    return (
        <ProjectsList isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} className="proyectListContainer" projectsData={projectsData}/>
    )
}