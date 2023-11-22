import './Skills.css'
import { useEffect } from 'react';
export const Skills = () => {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
    return (
        <>  
            
            <div id='skills' className="container text-center skillsContainer">
                <div className="row">
                    <div className="col" >
                        <img 
                            data-bs-toggle="tooltip" 
                            data-bs-placement="top"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="HTML" 
                            className="skill--img" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="ReactJs" 
                        className="skill--img" src="https://www.svgrepo.com/show/374032/reactjs.svg" alt="" />
                    </div>

                    <div className="col">
                        <img
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Angular" 
                        className="skill--img" src="https://www.svgrepo.com/show/452156/angular.svg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="CSS" 
                        className="skill--img" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="SCSS" 
                        className="skill--img" src="https://www.svgrepo.com/show/374067/scss2.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="TypeScript" 
                        className="skill--img" src="https://www.svgrepo.com/show/374146/typescript-official.svg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Javascript" 
                        className="skill--img" src="https://www.svgrepo.com/show/353925/javascript.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Bootstrap" 
                        className="skill--img" src="https://www.svgrepo.com/show/353498/bootstrap.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Angular Material" 
                        className="skill--img" src="https://material.angular.io/assets/img/angular-material-logo.svg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="GITHUB" 
                        className="skill--img" src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" alt="GITHUB" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="GIT" 
                        className="skill--img" src=" https://www.svgrepo.com/show/452210/git.svg" alt="" />
                    </div>
                    <div className="col">
                        <img 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="NGRX"   
                        className="skill--img" src="https://ngrx.io/assets/images/badge.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}