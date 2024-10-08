import './Presentacion.css'
import foto from '../../../../assets/imgs/foto.jpg'
export const Presentacion = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <div className='presentacionContainer' id='presentacion'>
            <section className={isDarkMode ? "presentation-section darkMode" : "presentation-section"}>
                <div className="containerPresentacion">
                    <div className="intro">
                        <h1 className={isDarkMode ? "darkModeH1" : ""}>Hola, soy <span className="highlight">Facundo Caamaño</span></h1>
                        <p className={isDarkMode ? "darkModeP" : "ligthModeP"}>
                            Soy un desarrollador web full-stack. Tengo experiencia en el
                            desarrollo de aplicaciones web utilizando tecnologías como
                            Angular, Node.js, Express, y MongoDB, así como en la
                            implementación de sistemas de autenticación y mensajería en
                            tiempo real. Me especializo en crear soluciones completas, desde
                            el frontend hasta el backend, optimizando la experiencia del
                            usuario y la funcionalidad del servidor.
                        </p>
                    </div>
                    <div className="profile-image">
                        <img src={foto} alt="Tu Foto" />
                    </div>
                </div>
            </section>
        </div>
    )
}