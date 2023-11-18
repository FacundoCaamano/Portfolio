import './ProjectList.css'
import { ProjectCard } from './projectCard/ProjectCard';
export const ProjectsList = ({ projectsData }) => {
    const projects = projectsData;
    return (
        <div className='proyectListContainer'>
            {projects.map(proyecto => <ProjectCard key={proyecto.id} info={proyecto} />)}
        </div>
    );
}