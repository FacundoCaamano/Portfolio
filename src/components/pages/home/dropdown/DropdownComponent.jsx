import './DropdownComponent.css'
export const DropdownComponent = () => {
    return (
        <div className="dropDownContainer">

        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#presentacion">Presentacion</a></li>
                <li><a className="dropdown-item" href="#about">Sobre mi</a></li>
                <li><a className="dropdown-item" href="#certificate">Certificados</a></li>
                <li><a className="dropdown-item" href="#skills">Skills</a></li>
            </ul>
        </div>
        </div>
    )
}