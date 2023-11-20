import './ProjectList.css'
import { ProjectCard } from './projectCard/ProjectCard';
import { ProjectsInfo } from '../../../../projectsInfo/ProjectsInfo.jsx'
import { useState } from 'react'; export const ProjectsList = ({ projectsData }) => {
    const [selectedTools, setSelectedTools] = useState([]); // Estado para almacenar las herramientas seleccionadas

    const handleToolSelection = (tool) => {
        // Función para manejar la selección/deselección de herramientas
        if (selectedTools.includes(tool)) {
            setSelectedTools(selectedTools.filter(selectedTool => selectedTool !== tool));
        } else {
            setSelectedTools([...selectedTools, tool]);
        }
    };

    const filterProjectsByTools = (project) => {
        // Función para filtrar proyectos según las herramientas seleccionadas
        if (selectedTools.length === 0) {
            return true; // Si no hay herramientas seleccionadas, mostrar todos los proyectos
        }

        return selectedTools.every(tool => project.herramientas.includes(tool));
    };

    const deleteTool = (tool) => {
        setSelectedTools(selectedTools.filter(selectedTool => selectedTool !== tool))
    }

    const filteredProjects = projectsData.filter(filterProjectsByTools);

    return (
        <div>
            {/* Renderizar botones de herramientas seleccionables */}
            <div className='dropdownListToolsContainer'>
                <div className="dropdown dropDowmTools">
                    <button className="btn btn-secondary dropdown-toggle btnToolsList" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccione herramientas:
                    </button>
                    <ul className="dropdown-menu">
                        {Array.from(new Set(ProjectsInfo.flatMap(project => project.herramientas)))
                            .map(tool => (
                                <li key={tool}>
                                    <button
                                        onClick={() => handleToolSelection(tool)}
                                        className='item_button'
                                    >
                                        {tool}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className='toolsListSelected'>
                    <div className='toolListContainer'>

                        <ul className="list-groupItems">
                            {
                                selectedTools.map((tool, index) => {
                                    return (
                                        <li key={index} className="list-group-itemTool">{tool} <button type="button" className="btn btnDeleteTool" onClick={() => deleteTool(tool)}>x</button></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='proyectListContainer'>
                {/* Renderizar proyectos filtrados */}
                {filteredProjects.map(proyecto => (
                    <ProjectCard key={proyecto.id} info={proyecto} />
                ))}
            </div>
        </div>
    );
};