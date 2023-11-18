import './ProjectCard.css'
export const ProjectCard = ({info})=>{
    return(
             <div className="card mb-3" style={{ maxWidth: "480px" , height:"250px"}}>
                 <div className="row g-0">
                     <div className="col-md-4">
                         <img src={info.pictureUrl} className="img-fluid rounded-start" alt="..." />
                     </div>
                     <div className="col-md-8">
                         <div className="card-body">
                             <h5 className="card-title">{info.name}</h5>
                             <p className="card-text">{info.herramientas}</p>
                             <div>
                             <a href={info.repositorio} target='_blank'>Link repositorio</a>
                             </div>
                             <div>
                             <a href={info.link} target='_blank'>Link web</a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
    )
}