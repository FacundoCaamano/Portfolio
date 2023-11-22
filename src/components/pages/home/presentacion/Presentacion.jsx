import './Presentacion.css'
import foto from '../../../../assets/imgs/foto.jpg'
export const Presentacion =({isDarkMode, setIsDarkMode})=>{
    return (
        <div className='presentacionContainer' id='presentacion'>
            <section className={isDarkMode ? "presentation-section darkMode" : "presentation-section"}>
                <div className="containerPresentacion">
                    <div className="intro">
                        <h1 className={isDarkMode ? "darkModeH1" : ""}>Hola, soy <span className="highlight">Facundo Caamaño</span></h1>
                        <p className={isDarkMode ? "darkModeP" : "ligthModeP"}>Soy un apasionado desarrollador frontend con experiencia en la creación de experiencias web increíbles. Me encanta diseñar y desarrollar interfaces de usuario atractivas y funcionales utilizando programación orientada a objetos y programación reactiva.</p>
                    </div>
                    <div className="profile-image">
                        <img src={foto} alt="Tu Foto" />
                    </div>
                </div>
            </section>
        </div>
    )
}