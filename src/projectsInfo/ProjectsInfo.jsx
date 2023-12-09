import BebidasCaamano from '../assets/imgProyectos/bebidasCaamano.png'
import Portafolio from '../assets/imgProyectos/portafolio.png'
import VehiculosCaamaño from '../assets/imgProyectos/vehiculosCaamano.png'
import PerifericosCaamaño from '../assets/imgProyectos/perifericos-caamaño.jpg'
import tateti from '../assets/imgProyectos/tateti.jpg'
import angularCurso from '../assets/imgProyectos/angular-curso.png'

export const ProjectsInfo = [
    {
        id: 6, name: "Angular-curso",
        pictureUrl: angularCurso,
        repositorio: 'https://github.com/FacundoCaamano/ProyectoFinalAngular',
        link: "https://proyecto-final-angular-psi.vercel.app/dashboard",
        herramientas: [
            "Angular",
            "TypeScript",
            "SCSS",
            "RxJs",
            "NGRX"
        ],
        api:[
            "NodeJs",
            "Express",
            "TypeScript"
        ]
    },
    {
        id: 5, name: "Ta Te Ti",
        pictureUrl: tateti,
        repositorio: 'https://github.com/FacundoCaamano/ta-te-ti.git',
        link: "https://ta-te-ti-sand.vercel.app/",
        herramientas: [
            "Vite",
            "ReactJs",
            "CSS",
            "Git"
        ]
    },
    {
        id: 4,
        name: "Periféricos-Caamaño",
        pictureUrl: PerifericosCaamaño,
        repositorio: 'https://github.com/FacundoCaamano/perifericos-caamano.git',
        link: "https://perifericos-caamano.vercel.app/",
        herramientas:
            [
                "ReactJs",
                "reactBootstrap",
                "Git",
                "sweetAlert"
            ]
    },
    {
        id: 3,
        name: "bebidas-Caamaño",
        pictureUrl: BebidasCaamano,
        repositorio: 'https://github.com/FacundoCaamano/bebidasCaama-o.git',
        link: "https://bebidas-caama-fp7rd35wy-facundocaamano.vercel.app/",
        herramientas:
            [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Git",
                "sweetAlert"
            ]
    },
    {
        id: 2,
        name: "Portfolio",
        pictureUrl: Portafolio,
        repositorio: 'https://github.com/FacundoCaamano/Portafolio',
        link: "https://portafolio-nine-omega.vercel.app/",
        herramientas:
            [
                "HTML",
                "SCSS",
                "Bootstrap",
                "Git"
            ]
    },
    {
        id: 1,
        name: "vehículos-Caamaño",
        pictureUrl: VehiculosCaamaño,
        repositorio: 'https://github.com/FacundoCaamano/vehiculos-caamano.git',
        link: "https://vehiculos-caamano-74gu7bgcd-facundocaamano.vercel.app/",
        herramientas:
            [
                "HTML",
                "SCSS",
                "Bootstrap",
                "Git"
            ]
    }
]
